import React, { useState } from 'react';
import axios from 'axios';
import './Trip.css';

const TripPlannerComponent = () => {
  const [days, setDays] = useState('');
  const [destination, setDestination] = useState('');
  const [response, setResponse] = useState('');

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://ai-trip-planner.p.rapidapi.com/',
      params: {
        days: days,
        destination: destination
      },
      headers: {
        'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
        'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="trip-planner-container">
      <form className="trip-planner-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="days">
            Days:
          </label>
          <input
            className="input"
            type="text"
            id="days"
            value={days}
            onChange={handleDaysChange}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="destination">
            Destination:
          </label>
          <input
            className="input"
            type="text"
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <div className="response-container">
        <pre className="response">{JSON.stringify(response.plan, null, 2)}</pre>
      </div>
    </div>
  );
};

export default TripPlannerComponent;
