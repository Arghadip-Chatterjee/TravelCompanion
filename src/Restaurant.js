import React, { useState } from 'react';
import axios from 'axios';
import './Restaurant.css'; // Import the CSS file

const Restaurant = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const apiKey = '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57';

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    const searchOptions = {
      method: 'GET',
      url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation',
      params: {
        query: query,
      },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
      },
    };

    try {
      const searchResponse = await axios.request(searchOptions);
      const locationId = searchResponse.data.data[0].locationId;

      const restaurantOptions = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
        params: {
          locationId: locationId,
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
        },
      };

      const restaurantResponse = await axios.request(restaurantOptions);
      setResponse(restaurantResponse.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="restaurant-container">
      <h2 className="title">Restaurant Search</h2>
      <div className="search-container">
        <input type="text" value={query} onChange={handleQueryChange} className="search-input" />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      {response && (
        <div className="results-container">
          {response.data.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <h3 className="restaurant-name">{restaurant.name}</h3>
              <p className="average-rating">Average Rating: {restaurant.averageRating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurant;
