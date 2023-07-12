import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from './firebase'; // Import the firebase instance from your firebase.js file
import './HomePage.css';
import hotels3 from './hotels3.png';
import BlogPost from './blogs';
import TravelAgencies from './TravelAgencies';
import restaurants2 from './restaurants2.png';
import flights2 from './flights2.png';
import TripPlanner2 from './TripPlanner2.png';
import weather2 from './weather2.png';
import blog2 from './blog2.png';
import living2 from './living2.png';
import TravelAgency2 from './TravelAgency2.png';

function HomePage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      navigate('/');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    navigate(`#${sectionId}`);
  };

  const handleHotels=()=>{
    navigate('/hotels');
  }

  const handleRestaurants=()=>{
    navigate('/restaurants');
  }

  const handleFlights=()=>{
    navigate('/flights')
  }

  const handlePlan=()=>{
    navigate('/trip_planner')
  }

  const handleWeather=()=>{
    navigate('/weather')
  }

  const handleBlog=()=>{
    navigate('/travel_blogs')
  }

  const handleLiving=()=>{
    navigate('/living')
  }

  const handleagencies=()=>{
    navigate('/travelagencies')
  }

  return (
    <div className="all">
      <nav className="nav">
        <div className="logo">
          <h2>Travel Advisor Website</h2>
        </div>

        <div className="nav_body">
          <ul>
            <li
              className={activeSection === 'hotels' ? 'active' : ''}
              onClick={() => handleNavClick('hotels')}
            >
              <a href="#hotels">Hotels</a>
            </li>
            <li
              className={activeSection === 'restaurants' ? 'active' : ''}
              onClick={() => handleNavClick('restaurants')}
            >
              <a href="#restaurants">Restaurants</a>
            </li>
            <li
              className={activeSection === 'flights' ? 'active' : ''}
              onClick={() => handleNavClick('flights')}
            >
              <a href="#flights">Flights</a>
            </li>
            <li
              className={activeSection === 'TripPlanner' ? 'active' : ''}
              onClick={() => handleNavClick('TripPlanner')}
            >
              <a href="#TripPlanner">Trip Planner</a>
            </li>
            <li
              className={activeSection === 'Weather' ? 'active' : ''}
              onClick={() => handleNavClick('Weather')}
            >
              <a href="#Weather">Weather</a>
            </li>
            <li
              className={activeSection === 'blog' ? 'active' : ''}
              onClick={() => handleNavClick('blog')}
            >
              <a href="#blog">Travel Blogs</a>
            </li>
            <li
              className={activeSection === 'living' ? 'active' : ''}
              onClick={() => handleNavClick('living')}
            >
              <a href="#living">Living Prospects</a>
            </li>
            <li
              className={activeSection === 'agency' ? 'active' : ''}
              onClick={() => handleNavClick('agency')}
            >
              <a href="#agency">Travel Agencies</a>
            </li>
          </ul>
        </div>

        <div className="signout">
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </nav>

      <div className="hotels" id="hotels">
        <div className="hotels_body">
          <div className="heading">Finding the perfect escape at this hotel</div>
          <div className="button">
            <button onClick={handleHotels}>Hotels</button>
          </div>
        </div>

        <div className="hotels_img">
          <img src={hotels3} alt="Hotels" />
        </div>
      </div>

      <div className="restaurants" id="restaurants">
        <div className="hotels_body">
          <div className="heading">“The business of feeding people is the most amazing business in the world.”</div>
          <div className="button">
            <button onClick={handleRestaurants}>Restaurants</button>
          </div>
        </div>

        <div className="hotels_img">
          <img src={restaurants2} alt="Restaurants" />
        </div>
      </div>

      <div className="flights" id="flights">
        <div className="hotels_body">
          <div className="heading">Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly</div>
          <div className="button">
            <button onClick={handleFlights}>Flights</button>
          </div>
        </div>

        <div className="hotels_img">
          <img src={flights2} alt="Flights" />
        </div>
      </div>

      <div className="TripPlanner" id="TripPlanner">
        <div className="hotels_body">
          <div className="heading">Embark on Your Ultimate Journey: The Perfect Trip Planner for Unforgettable Adventures</div>
          <div className="button">
            <button onClick={handlePlan}>Trip Planner</button>
          </div>
        </div>

        <div className="hotels_img">
          <img src={TripPlanner2} alt="Trip Planner" />
        </div>
      </div>

      <div className="Weather" id="Weather">
        <div className="hotels_body">
          <div className="heading">Everybody talks about the weather, but nobody does anything about it</div>
          <div className="button">
            <button onClick={handleWeather}>Weather</button>
          </div>
        </div>

        <div className="hotels_img">
          <img src={weather2} alt="Weather" />
        </div>
      </div>

      <div className="Blog" id="blog">
        <div className="hotels_body">
          <div className="heading">Insights Unleashed: Explore, Engage, and Empower with Our Captivating Blogging Platform</div>
          <div className="button">
            <button onClick={handleBlog}>Blog</button>
          </div>
        </div>

        <div className="hotels_img">
          <img src={blog2} alt="Blog" />
        </div>
      </div>

      <div className="Living" id="living">
        <div className="hotels_body">
          <div className="heading">Discover the Finest Living Prospects: Unlock Your Dream Lifestyle Today!</div>
          <div className="button">
            <button onClick={handleLiving}>Living Prospects</button>
          </div>
        </div>

        <div className="hotels_img">
          <img src={living2} alt="Living Prospects" />
        </div>
      </div>

      <div className="TravelAgency" id="agency">
        <div className="hotels_body">
          <div className="heading">Live your life by a compass, not a clock</div>
          <div className="button">
            <button onClick={handleagencies}>Travel Agencies</button>
          </div>
        </div>

        <div className="hotels_img">
          <img src={TravelAgency2} alt="Travel Agencies" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
