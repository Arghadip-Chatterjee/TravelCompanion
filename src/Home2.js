// import React, { useState } from 'react';
// import axios from 'axios';
// import 'react-dates/initialize';
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
// import { format } from 'date-fns';

// const FlightSearchComponent = () => {
//   const [sourceAirportCode, setSourceAirportCode] = useState('');
//   const [destinationAirportCode, setDestinationAirportCode] = useState('');
//   const [date, setDate] = useState(null);
//   const [focused, setFocused] = useState(false);
//   const [itineraryType, setItineraryType] = useState('ONE_WAY');
//   const [sortOrder, setSortOrder] = useState('ML_BEST_VALUE');
//   const [numAdults, setNumAdults] = useState('');
//   const [numSeniors, setNumSeniors] = useState('');
//   const [classOfService, setClassOfService] = useState('ECONOMY');
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     const options = {
//       method: 'GET',
//       url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights',
//       params: {
//         sourceAirportCode,
//         destinationAirportCode,
//         date: date ? format(date.toDate(), 'yyyy-MM-dd') : '',
//         itineraryType,
//         sortOrder,
//         numAdults,
//         numSeniors,
//         classOfService,
//         currencyCode: 'INR'
//       },
//       headers: {
//         'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
//         'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await axios.request(options);
//       setResponse(response.data);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//       setResponse(null);
//     }
//   };

//   return (
//     <div>
//       <h2>Flight Search</h2>
//       <div>
//         <label>Source Airport Code:</label>
//         <input
//           type="text"
//           value={sourceAirportCode}
//           onChange={(e) => setSourceAirportCode(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Destination Airport Code:</label>
//         <input
//           type="text"
//           value={destinationAirportCode}
//           onChange={(e) => setDestinationAirportCode(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Date:</label>
//         <SingleDatePicker
//           date={date}
//           onDateChange={(date) => setDate(date)}
//           focused={focused}
//           onFocusChange={({ focused }) => setFocused(focused)}
//           id="flight-date"
//           placeholder="Select a date"
//           numberOfMonths={1}
//           isOutsideRange={() => false}
//         />
//       </div>
//       <div>
//         <label>Itinerary Type:</label>
//         <select value={itineraryType} onChange={(e) => setItineraryType(e.target.value)}>
//           <option value="ONE_WAY">One Way</option>
//           <option value="ROUND_TRIP">Round Trip</option>
//         </select>
//       </div>
//       <div>
//         <label>Sort Order:</label>
//         <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
//           <option value="ML_BEST_VALUE">ML Best Value</option>
//           <option value="DURATION">Duration</option>
//           <option value="PRICE">Price</option>
//           <option value="EARLIEST_OUTBOUND_DEPARTURE">Earliest Outbound Departure</option>
//           <option value="EARLIEST_OUTBOUND_ARRIVAL">Earliest Outbound Arrival</option>
//           <option value="LATEST_OUTBOUND_DEPARTURE">Latest Outbound Departure</option>
//           <option value="LATEST_OUTBOUND_ARRIVAL">Latest Outbound Arrival</option>
//         </select>
//       </div>
//       <div>
//         <label>Number of Adults:</label>
//         <input
//           type="text"
//           value={numAdults}
//           onChange={(e) => setNumAdults(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Number of Seniors:</label>
//         <input
//           type="text"
//           value={numSeniors}
//           onChange={(e) => setNumSeniors(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Class of Service:</label>
//         <select value={classOfService} onChange={(e) => setClassOfService(e.target.value)}>
//           <option value="ECONOMY">Economy</option>
//           <option value="PREMIUM_ECONOMY">Premium Economy</option>
//           <option value="BUSINESS">Business</option>
//           <option value="FIRST">First</option>
//         </select>
//       </div>
//       <button onClick={handleSearch}>Search</button>
//       {response && (
//         <div>
//           <h3>Response:</h3>
//           <pre>{JSON.stringify(response, null, 2)}</pre>
//         </div>
//       )}
//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// };

// export default FlightSearchComponent;




import React, { useState } from 'react';
import axios from 'axios';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { format } from 'date-fns';
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
  
  

  const handleSearch = async () => {
    const options = {
      method: 'GET',
      url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights',
      params: {
        sourceAirportCode,
        destinationAirportCode,
        date: date ? format(date.toDate(), 'yyyy-MM-dd') : '',
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

  // Function to extract Origin Station Code from response
  const getoriginStationCode = () => {
    if (response && response.data && response.data.flights && response.data.flights.length > 0) {
      const firstFlight = response.data.flights[0];
      if (firstFlight.segments && firstFlight.segments.length > 0) {
        const firstSegment = firstFlight.segments[0];
        if (firstSegment.legs && firstSegment.legs.length > 0) {
          const firstLeg = firstSegment.legs[0];
          if (firstLeg.originStationCode) {
            return firstLeg.originStationCode;
          }
        }
      }
    }
    return null;
  };

  const originStationCode = getoriginStationCode();


  // Function to extract Destination Station Code from response
  const getdestinationStationCode = () => {
    if (response && response.data && response.data.flights && response.data.flights.length > 0) {
      const firstFlight = response.data.flights[0];
      if (firstFlight.segments && firstFlight.segments.length > 0) {
        const firstSegment = firstFlight.segments[0];
        if (firstSegment.legs && firstSegment.legs.length > 0) {
          const firstLeg = firstSegment.legs[0];
          if (firstLeg.destinationStationCode) {
            return firstLeg.destinationStationCode;
          }
        }
      }
    }
    return null;
  };

  const destinationStationCode = getdestinationStationCode();



  // Function to extract departureDateTime from response
  const getDepartureDateTime = () => {
    if (response && response.data && response.data.flights && response.data.flights.length > 0) {
      const firstFlight = response.data.flights[0];
      if (firstFlight.segments && firstFlight.segments.length > 0) {
        const firstSegment = firstFlight.segments[0];
        if (firstSegment.legs && firstSegment.legs.length > 0) {
          const firstLeg = firstSegment.legs[0];
          if (firstLeg.departureDateTime) {
            return firstLeg.departureDateTime;
          }
        }
      }
    }
    return null;
  };


  const departureDateTime = getDepartureDateTime();

  // Function to extract arrivalDateTime from response
  const getArrivalDateTime = () => {
    if (response && response.data && response.data.flights && response.data.flights.length > 0) {
      const firstFlight = response.data.flights[0];
      if (firstFlight.segments && firstFlight.segments.length > 0) {
        const firstSegment = firstFlight.segments[0];
        if (firstSegment.legs && firstSegment.legs.length > 0) {
          const firstLeg = firstSegment.legs[0];
          if (firstLeg.arrivalDateTime) {
            return firstLeg.arrivalDateTime;
          }
        }
      }
    }
    return null;
  };

  const arrivalDateTime = getArrivalDateTime();

  // Function to extract classOfService from response
  const ClassOfService = () => {
    if (response && response.data && response.data.flights && response.data.flights.length > 0) {
      const firstService = response.data.flights[0];
      if (firstService.segments && firstService.segments.length > 0) {
        const firstSegment = firstService.segments[0];
        if (firstSegment.legs && firstSegment.legs.length > 0) {
          const firstLeg = firstSegment.legs[0];
          if (firstLeg.classOfService) {
            return firstLeg.classOfService;
          }
        }
      }
    }
    return null;
  };

  const getClassOfService = ClassOfService();

  // Function to extract marketingCarrierCode from response
  const getMarketingCarrier = () => {
    if (response && response.data && response.data.flights && response.data.flights.length > 0) {
      const firstFlight = response.data.flights[0];
      if (firstFlight.segments && firstFlight.segments.length > 0) {
        const firstSegment = firstFlight.segments[0];
        if (firstSegment.legs && firstSegment.legs.length > 0) {
          const firstLeg = firstSegment.legs[0];
          if (firstLeg.marketingCarrierCode) {
            return firstLeg.marketingCarrierCode;
          }
        }
      }
    }
    return null;
  };

  const mark = getMarketingCarrier();

  // Function to extract Flight Number from response
  const getFlightNumber = () => {
    if (response && response.data && response.data.flights && response.data.flights.length > 0) {
      const firstFlight = response.data.flights[0];
      if (firstFlight.segments && firstFlight.segments.length > 0) {
        const firstSegment = firstFlight.segments[0];
        if (firstSegment.legs && firstSegment.legs.length > 0) {
          const firstLeg = firstSegment.legs[0];
          if (firstLeg.flightNumber) {
            return firstLeg.flightNumber;
          }
        }
      }
    }
    return null;
  };

  const flightNumber = getFlightNumber();

  // Function to extract URL from response
  const geturl = () => {
    if (response && response.data && response.data.flights && response.data.flights.length > 0) {
      const firstFlight = response.data.flights[0];
      if (firstFlight.purchaseLinks && firstFlight.purchaseLinks.length > 0) {
        const firstpurchaseLinks = firstFlight.purchaseLinks[0];
        if (firstpurchaseLinks.url) {
          return firstpurchaseLinks.url;
        }
      }
    }

    return null;
  }

  const url = geturl();



  return (
    <div className='flight-search-container'> 
      <h2 className='flight-search-title'>Flight Search</h2>
      <div className='input-container'>
        <label className='input-label'>Source Airport Code:</label>
        <input
          className='input-field'
          type="text"
          value={sourceAirportCode}
          onChange={(e) => setSourceAirportCode(e.target.value)}
        />
      </div>
      <div>
        <label className='input-label'>Destination Airport Code:</label>
        <input
          className='input-field'
          type="text"
          value={destinationAirportCode}
          onChange={(e) => setDestinationAirportCode(e.target.value)}
        />
      </div>
      <div>
        <label className='input-label'>Date:</label>
        <SingleDatePicker
          date={date}
          onDateChange={(date) => setDate(date)}
          focused={focused}
          onFocusChange={({ focused }) => setFocused(focused)}
          id="flight-date"
          placeholder="Select a date"
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
      <div>
        <label className='input-label'>Itinerary Type:</label>
        <select value={itineraryType} onChange={(e) => setItineraryType(e.target.value)}>
          <option value="ONE_WAY">One Way</option>
          <option value="ROUND_TRIP">Round Trip</option>
        </select>
      </div>
      <div>
        <label className='input-label'>Sort Order:</label>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="ML_BEST_VALUE">ML Best Value</option>
          <option value="DURATION">Duration</option>
          <option value="PRICE">Price</option>
          <option value="EARLIEST_OUTBOUND_DEPARTURE">Earliest Outbound Departure</option>
          <option value="EARLIEST_OUTBOUND_ARRIVAL">Earliest Outbound Arrival</option>
          <option value="LATEST_OUTBOUND_DEPARTURE">Latest Outbound Departure</option>
          <option value="LATEST_OUTBOUND_ARRIVAL">Latest Outbound Arrival</option>
        </select>
      </div>
      <div>
        <label className='input-label'>Number of Adults:</label>
        <input
          className='input-field'
          type="text"
          value={numAdults}
          onChange={(e) => setNumAdults(e.target.value)}
        />
      </div>
      <div>
        <label className='input-label'>Number of Seniors:</label>
        <input
          className='input-field'
          type="text"
          value={numSeniors}
          onChange={(e) => setNumSeniors(e.target.value)}
        />
      </div>
      <div>
        <label className='input-label'>Class of Service:</label>
        <select value={classOfService} onChange={(e) => setClassOfService(e.target.value)}>
          <option value="ECONOMY">Economy</option>
          <option value="PREMIUM_ECONOMY">Premium Economy</option>
          <option value="BUSINESS">Business</option>
          <option value="FIRST">First</option>
        </select>
      </div>
      <button onClick={handleSearch} className='search-button'>Search</button>
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
                      {/* <h4>Segment {segmentIndex + 1}:</h4> */}
                      {segment.legs &&
                        segment.legs.length > 0 &&
                        segment.legs.map((leg, legIndex) => {
                          return (
                            <div className='legs' key={legIndex}>
                              {/* <h5>Leg {legIndex + 1}:</h5> */}
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
                      <a href={purchaseLink.url} target="_blank" rel="noopener noreferrer"><button>Book Now</button></a>
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
