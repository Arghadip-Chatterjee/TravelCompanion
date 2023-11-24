import React from 'react';
import './style5.css';
import Arghadeep from './Arghadeep.jpg';
const teamMembers = [
  { name: 'Arghadip Chatterjee', role: 'FullStack Developer', imageSrc: Arghadeep },
];

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are a passionate team of developers dedicated to creating
          beautiful and functional web applications. Our skills range from frontend technologies
          such as HTML, CSS, and JavaScript and Reactjs to backend technologies like Sanity.io
        </p>
        <p>
          Our Team Members include:-
            <ul>
              {teamMembers.map((member, index) => (
                <li key={index}>
                  <img src={member.imageSrc} alt={member.name} className="team-member-image" />
                  {`${member.name} - ${member.role}`}
                </li>
              ))}
            </ul>
        </p>
        <p>
          We believe in the power of technology to solve real-world problems and improve lives.
          Our goal is to create innovative and user-friendly solutions that make a positive impact
          on the world.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
