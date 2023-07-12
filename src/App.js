import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightSearchComponent from './Home2';
import MyComponent from './Hotels';
import Login from './Login';
import Restaurant from './Restaurant';
import TripPlannerComponent from './Trip';
import WeatherComponent from './weather';
import BlogList from './blogs';
import Living from './living';
import HomePage from './HomePage';
import TravelBlogs from './blogs';
import BlogPost from './blogs';
import TravelAgencies from './TravelAgencies';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/flights" element={<FlightSearchComponent />} />
          <Route path="/hotels" element={<MyComponent />} />
          <Route path='/' element={<Login/>}/>
          <Route path='/restaurants' element={<Restaurant/>}/>
          <Route path='/trip_planner' element={<TripPlannerComponent/>}/>
          <Route path='/weather' element={<WeatherComponent/>}/>
          <Route path='/travel_blogs' element={<BlogPost/>}/>
          <Route path='/living' element={<Living/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/travelagencies' element={<TravelAgencies/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
