import React from 'react';
import './Home.css'; // Import the CSS file for HomeSection
import LinkButton from './LinkButton';

const HomeSection = () => {
  const handleClick = () => {
    // Define your onClick logic here
    console.log('Button clicked');
  };

  return (
    <section id="home" className="home">
      <h1 className="banner">Unleash the power of herbs</h1>
      <h2 className="slogan">Harness Your Vision to Discover the Healing Power of Herbs</h2>
      <LinkButton href="#about" onClick={handleClick}>Get Started</LinkButton>
    </section>
  );
};

export default HomeSection;
