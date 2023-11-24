import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import './TravelAgencies.css'; // Import CSS file for styling

const client = sanityClient({
  projectId: 'fj9in8ja',
  dataset: 'production',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  return builder.image(source);
};

const TravelAgencies = () => {
  const [agencies, setAgencies] = useState([]);
  const [western, setWestern] = useState([]);
  const [north, setNorth] = useState([]);
  const [south, setSouth] = useState([]);
  const [selectedAgency, setSelectedAgency] = useState('');

  useEffect(() => {
    client
      .fetch('*[_type == "eastern"]')
      .then((response) => setAgencies(response))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    client
      .fetch('*[_type == "western"]')
      .then((response) => setWestern(response))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    client
      .fetch('*[_type == "north"]')
      .then((response) => setNorth(response))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    client
      .fetch('*[_type == "south"]')
      .then((response) => setSouth(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="travel-agencies-container">
      <div className="dropdown-container">
        <label htmlFor="agencyDropdown">Select Travel Agency:</label>
        <select
          id="agencyDropdown"
          value={selectedAgency}
          onChange={(e) => setSelectedAgency(e.target.value)}
        >
          <option value="eastern">Eastern</option>
          <option value="western">Western</option>
          <option value="north">North</option>
          <option value="south">South</option>
        </select>
      </div>

      {selectedAgency === 'eastern' && (
        <div className="travel-agencies-row">
          <h2>Eastern Travel Agencies</h2>
          {agencies.map((agency) => (
            <div className="travel-agency-card" key={agency._id}>
              <img className="agency-card-image" src={urlFor(agency.poster.asset._ref).url()} alt={agency.name} />
              <div className="agency-card-content">
                <h2 className="agency-name">{agency.name}</h2>
                <p className="agency-description">{agency.description}</p>
                <p className="agency-phone">Phone Number: {agency.phone}</p>
                <p><a href={agency.Url}>URL</a></p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedAgency === 'western' && (
        <div className="travel-agencies-row">
          <h2>Western Travel Agencies</h2>
          {western.map((agency) => (
            <div className="travel-agency-card" key={agency._id}>
              <img className="agency-card-image" src={urlFor(agency.poster.asset._ref).url()} alt={agency.name} />
              <div className="agency-card-content">
                <h2 className="agency-name">{agency.name}</h2>
                <p className="agency-description">{agency.description}</p>
                <p className="agency-phone">Phone Number: {agency.phone}</p>
                <p><a href={agency.Url}>URL</a></p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedAgency === 'north' && (
        <div className="travel-agencies-row">
          <h2>North Travel Agencies</h2>
          {north.map((agency) => (
            <div className="travel-agency-card" key={agency._id}>
              <img className="agency-card-image" src={urlFor(agency.poster.asset._ref).url()} alt={agency.name} />
              <div className="agency-card-content">
                <h2 className="agency-name">{agency.name}</h2>
                <p className="agency-description">{agency.description}</p>
                <p className="agency-phone">Phone Number: {agency.phone}</p>
                <p><a href={agency.Url}>URL</a></p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedAgency === 'south' && (
        <div className="travel-agencies-row">
          <h2>South Travel Agencies</h2>
          {south.map((agency) => (
            <div className="travel-agency-card" key={agency._id}>
              <img className="agency-card-image" src={urlFor(agency.poster.asset._ref).url()} alt={agency.name} />
              <div className="agency-card-content">
                <h2 className="agency-name">{agency.name}</h2>
                <p className="agency-description">{agency.description}</p>
                <p className="agency-phone">Phone Number: {agency.phone}</p>
                <p><a href={agency.Url}>URL</a></p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TravelAgencies;
