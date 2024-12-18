import React from "react";
import RestaurantCard from "./components/Cards";

const App = () => {
  // Sample restaurant data
  const restaurants = [
    {
      id: 1,
      name: "Pasta Palace",
      location: "New York, NY",
    },
    {
      id: 2,
      name: "Taco Town",
      location: "Los Angeles, CA",
    },
    {
      id: 3,
      name: "Burger Barn",
      location: "Austin, TX",
    },
    {
      id: 4,
      name: "Sushi Stop",
      location: "San Francisco, CA",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center p-5 bg-blue-600 text-white text-3xl font-bold">
        Restaurants
      </header>
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            location={restaurant.location}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
