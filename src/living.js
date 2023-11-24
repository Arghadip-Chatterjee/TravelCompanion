import React, { useState } from 'react';
import axios from 'axios';
import './living.css'; // Import the CSS file

const Living = () => {
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    if (e.target.name === 'cityName') {
      setCityName(e.target.value);
    } else if (e.target.name === 'countryName') {
      setCountryName(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://cost-of-living-and-prices.p.rapidapi.com/prices',
      params: {
        city_name: cityName,
        country_name: countryName,
      },
      headers: {
        'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
        'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setResponse(response.data);
      setError(null);
    } catch (error) {
      setResponse(null);
      setError(error);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          City Name:
          <input
            className="input"
            type="text"
            name="cityName"
            value={cityName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="label">
          Country Name:
          <input
            className="input"
            type="text"
            name="countryName"
            value={countryName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button className="button" type="submit">
          Submit
        </button>
      </form>

      {response && (
        <div className="response">
          <h2>Exchange Rates:</h2>
          <ul>
            {Object.entries(response.exchange_rate).map(([currency, rate]) => (
              <li key={currency}>
                <strong>{currency}:</strong> {rate}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {response && (
        <div className="response">
          <h2>Response:</h2>
          {response.prices && response.prices.map((price, index) => (
            <div key={index}>
              <p><strong>Item Name:</strong> {price.item_name}</p>
              <p><strong>Category Name:</strong> {price.category_name}</p>
              <p><strong>Min:</strong> {price.min}</p>
              <p><strong>Avg:</strong> {price.avg}</p>
              <p><strong>Max:</strong> {price.max}</p>
              <p><strong>Measure:</strong> {price.measure}</p>
              <p><strong>Currency Code:</strong> {price.currency_code}</p>
              <hr />
            </div>
          ))}

          
        </div>
      )}
      {error && (
        <div className="error">
          <h2>Error:</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Living;
