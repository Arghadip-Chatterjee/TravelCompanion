import React, { useState } from 'react';
import axios from 'axios';
import './tourist.css';

const OpenTripMapSearch = () => {
  const [placeName, setPlaceName] = useState('');
  const [placeData, setPlaceData] = useState(null);
  const [nearbyPlacesData, setNearbyPlacesData] = useState(null);

  const fetchPlaceData = async () => {
    const options = {
      method: 'GET',
      url: 'https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname',
      params: { name: placeName },
      headers: {
        'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
        'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setPlaceData(response.data);

      // Fetch nearby places using the obtained latitude and longitude
      const latitude = response.data.lat;
      const longitude = response.data.lon;
      fetchNearbyPlaces(latitude, longitude);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNearbyPlaces = async (latitude, longitude) => {
    const options = {
      method: 'GET',
      url: 'https://opentripmap-places-v1.p.rapidapi.com/en/places/radius',
      params: {
        radius: '5000',
        lon: longitude,
        lat: latitude,
      },
      headers: {
        'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
        'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setNearbyPlacesData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    fetchPlaceData();
  };

  return (
    <div className="open-trip-map-search">
      <label>
        Enter Place Name:
        <input
          type="text"
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>

      <div className="result-container">
        <h2>Place Data</h2>
        {placeData && (
          <pre>
            Latitude: {placeData.lat}, Longitude: {placeData.lon}
            <br />
          </pre>
        )}
      </div>

      <div className="result-container">
        <h2>Nearby Places Data</h2>
        {nearbyPlacesData &&
          nearbyPlacesData.features && (
            <ul className="nearby-places">
              {nearbyPlacesData.features.map((place, index) => (
                <li key={index} className="nearby-place-item">
                  <div className="nearby-place-name">{place.properties.name}</div>
                  {/* <div className="nearby-place-address">{place.properties.address}</div> */}
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  );
};

export default OpenTripMapSearch;
