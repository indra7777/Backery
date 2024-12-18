// src/components/CakesList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CakesList = () => {
    const [cakes, setCakes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCakes = async () => {
            try {
                const response = await axios.get('/cakes');
                setCakes(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchCakes();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Cakes List</h1>
            <ul>
                {cakes.map(cake => (
                    <li key={cake._id}>
                        <Link to={`/cakes/${cake._id}`}>{cake.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CakesList;