import React from 'react';
import './About.css';  // Custom styles for the About component
import logo1 from '../assets/logo1.jpg';
import LinkButton from './LinkButton';

const About = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-bio">
          <p>
            Welcome to <strong>Herbify</strong>, where we specialize in providing knowledge about herbs through immersive 3D views.<br />
            We believe in the power of herbs as a natural alternative to allopathic medicine.<br />
            Our mission is to educate and empower you to make informed decisions about incorporating herbs into your health regimen.
          </p>
        </div>

        <div className="about-image">
          <img src={logo1} alt="About us" className="bio-image" />
        </div>
      </div>
      <LinkButton href="#team" onClick={handleClick}>Our Team</LinkButton>
    </div>
  );
};

export default About;
