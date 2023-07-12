import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Home2.css';

const FlightSearchComponent = () => {
  const [sourceAirportCode, setSourceAirportCode] = useState('');
  const [destinationAirportCode, setDestinationAirportCode] = useState('');
  const [date, setDate] = useState(null);
  const [focused, setFocused] = useState(false);
  const [itineraryType, setItineraryType] = useState('ONE_WAY');
  const [sortOrder, setSortOrder] = useState('ML_BEST_VALUE');
  const [numAdults, setNumAdults] = useState('');
  const [numSeniors, setNumSeniors] = useState('');
  const [classOfService, setClassOfService] = useState('ECONOMY');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const formatDate = (date) => {
    if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return '';
  };

  const handleSearch = async () => {
    const formattedDate = formatDate(date); // Format the selected date

    const options = {
      method: 'GET',
      url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights',
      params: {
        sourceAirportCode,
        destinationAirportCode,
        date: formattedDate, // Use the formatted date
        itineraryType,
        sortOrder,
        numAdults,
        numSeniors,
        classOfService,
        currencyCode: 'INR'
      },
      headers: {
        'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setResponse(response.data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setResponse(null);
    }
  };

  return (
    <div className='flight-search-container'>
      <h2 className='flight-search-title'>Flight Search</h2>
      <div className='input-container'>
        <label className='input-label'>Source Airport Code:</label>
        <input
          className='input-field'
          type='text'
          value={sourceAirportCode}
          onChange={(e) => setSourceAirportCode(e.target.value)}
        />
      </div>
      <div>
        <label className='input-label'>Destination Airport Code:</label>
        <input
          className='input-field'
          type='text'
          value={destinationAirportCode}
          onChange={(e) => setDestinationAirportCode(e.target.value)}
        />
      </div>
      <div>
        <label className='input-label'>Date:</label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          placeholderText='Select a date'
          dateFormat='yyyy-MM-dd'
        />
      </div>
      <div>
        <label className='input-label'>Itinerary Type:</label>
        <select value={itineraryType} onChange={(e) => setItineraryType(e.target.value)}>
          <option value='ONE_WAY'>One Way</option>
          <option value='ROUND_TRIP'>Round Trip</option>
        </select>
      </div>
      <div>
        <label className='input-label'>Sort Order:</label>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value='ML_BEST_VALUE'>ML Best Value</option>
          <option value='DURATION'>Duration</option>
          <option value='PRICE'>Price</option>
          <option value='EARLIEST_OUTBOUND_DEPARTURE'>Earliest Outbound Departure</option>
          <option value='EARLIEST_OUTBOUND_ARRIVAL'>Earliest Outbound Arrival</option>
          <option value='LATEST_OUTBOUND_DEPARTURE'>Latest Outbound Departure</option>
          <option value='LATEST_OUTBOUND_ARRIVAL'>Latest Outbound Arrival</option>
        </select>
      </div>
      <div>
        <label className='input-label'>Number of Adults:</label>
        <input
          className='input-field'
          type='text'
          value={numAdults}
          onChange={(e) => setNumAdults(e.target.value)}
        />
      </div>
      <div>
        <label className='input-label'>Number of Seniors:</label>
        <input
          className='input-field'
          type='text'
          value={numSeniors}
          onChange={(e) => setNumSeniors(e.target.value)}
        />
      </div>
      <div>
        <label className='input-label'>Class of Service:</label>
        <select value={classOfService} onChange={(e) => setClassOfService(e.target.value)}>
          <option value='ECONOMY'>Economy</option>
          <option value='PREMIUM_ECONOMY'>Premium Economy</option>
          <option value='BUSINESS'>Business</option>
          <option value='FIRST'>First</option>
        </select>
      </div>
      <button onClick={handleSearch} className='search-button'>
        Search
      </button>
      {response &&
        response.data &&
        response.data.flights &&
        response.data.flights.length > 0 &&
        response.data.flights.map((flight, index) => {
          return (
            <div className='flight-result' key={index}>
              <h3 className='flight-title'>Flight {index + 1}:</h3>
              {flight.segments &&
                flight.segments.length > 0 &&
                flight.segments.map((segment, segmentIndex) => {
                  return (
                    <div className='segment' key={segmentIndex}>
                      {segment.legs &&
                        segment.legs.length > 0 &&
                        segment.legs.map((leg, legIndex) => {
                          return (
                            <div className='legs' key={legIndex}>
                              <p>Origin Station Code: {leg.originStationCode}</p>
                              <p>Destination Station Code: {leg.destinationStationCode}</p>
                              <p>Departure Date and Time: {leg.departureDateTime}</p>
                              <p>Arrival Date and Time: {leg.arrivalDateTime}</p>
                              <p>Class of Service: {leg.classOfService}</p>
                              <p>Marketing Carrier: {leg.marketingCarrierCode}</p>
                              <p>Flight Number: {leg.flightNumber}</p>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
              {flight.purchaseLinks &&
                flight.purchaseLinks.length > 0 &&
                flight.purchaseLinks.map((purchaseLink, purchaseIndex) => {
                  return (
                    <div className='purchase-link' key={purchaseIndex}>
                      <h4 className='flight-title'>Purchase Link {purchaseIndex + 1}:</h4>
                      <a href={purchaseLink.url} target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};

export default FlightSearchComponent;
