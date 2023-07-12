import React, { useState } from 'react';
import axios from 'axios';
import './weather.css';

const WeatherComponent = () => {
  const [text, setText] = useState('');
  const [response, setResponse] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const findPlacesOptions = {
      method: 'GET',
      url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
      params: {
        text: text,
        language: 'en',
      },
      headers: {
        'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
        'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com',
      },
    };

    const currentWeatherOptions = {
      method: 'GET',
      url: 'https://ai-weather-by-meteosource.p.rapidapi.com/current',
      params: {
        place_id: '', // Will be set later with the extracted place_id
        timezone: 'auto',
        language: 'en',
        units: 'auto',
      },
      headers: {
        'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
        'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com',
      },
    };

    try {
      const findPlacesResponse = await axios.request(findPlacesOptions);
      setResponse(findPlacesResponse.data);

      // Extract place_id from the first result
      const firstResult = findPlacesResponse.data[0];
      const placeId = firstResult.place_id;
      setPlaceId(placeId);

      currentWeatherOptions.params.place_id = placeId; // Set place_id in the currentWeatherOptions

      const currentWeatherResponse = await axios.request(currentWeatherOptions);
      setCurrentWeather(currentWeatherResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="weather-container">
        <h2>Enter Location </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} className="input-field" />
        <button type="submit" className="submit-button">Get Weather</button>
      </form>
      
      {currentWeather && (
        <div className="weather-info">
          <h2>Current Weather:</h2>
          <pre>{JSON.stringify(currentWeather, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
