// src/components/CakeDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CakeDetail = () => {
    const { id } = useParams();
    const [cake, setCake] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCake = async () => {
            try {
                const response = await axios.get(`/cakes/${id}`);
                setCake(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchCake();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!cake) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{cake.name}</h1>
            <p>{cake.description}</p>
            <p>Price: ${cake.price}</p>
        </div>
    );
};

export default CakeDetail;