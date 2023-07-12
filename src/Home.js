import React, { useState } from 'react';
import axios from 'axios';

const AirportSearch = () => {
  const [airportQuery, setAirportQuery] = useState('');
  const [destinationQuery, setDestinationQuery] = useState('');
  const [airportResponses, setAirportResponses] = useState([]);
  const [destinationResponses, setDestinationResponses] = useState([]);
  const [error, setError] = useState(null);
  const [requiredDate, setRequiredDate] = useState('');
  const [flightSearchResponse, setFlightSearchResponse] = useState(null);
  const [sid, setSid] = useState('');
  const [pollOptionsResponse, setPollOptionsResponse] = useState(null); // New state variable
  

  const handleSearch = async () => {
    const airportOptions = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/airports/search',
      params: { query: airportQuery },
      headers: {
        'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };

    const destinationOptions = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/airports/search',
      params: { query: destinationQuery },
      headers: {
        'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };

    try {
      const [airportResponse, destinationResponse] = await Promise.all([
        axios.request(airportOptions),
        axios.request(destinationOptions)
      ]);

      setAirportResponses([...airportResponses, airportResponse.data]);
      setDestinationResponses([...destinationResponses, destinationResponse.data]);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setAirportResponses([]);
      setDestinationResponses([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={airportQuery}
        onChange={(e) => setAirportQuery(e.target.value)}
        placeholder="Enter Airport"
      />

      <input
        type="text"
        value={destinationQuery}
        onChange={(e) => setDestinationQuery(e.target.value)}
        placeholder="Enter Destination"
      />

      <button onClick={handleSearch}>Search</button>

      {airportResponses.length > 0 && (
        <div>
          <h2>Airport Responses:</h2>
          {airportResponses.map((response, index) => (
            <div key={index}>
              <h3>Response {index + 1}:</h3>
              <pre>"code": "{response[0]?.code}"</pre>
            </div>
          ))}
        </div>
      )}

      {destinationResponses.length > 0 && (
        <div>
          <h2>Destination Responses:</h2>
          {destinationResponses.map((response, index) => (
            <div key={index}>
              <h3>Response {index + 1}:</h3>
              <pre>"code": "{response[0]?.code}"</pre>
            </div>
          ))}
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default AirportSearch;
