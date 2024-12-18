import React from "react";

const RestaurantCard = ({ name, location }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 mt-2">{location}</p>
    </div>
  );
};

export default RestaurantCard;
