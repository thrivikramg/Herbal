import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import HomeSection from './component/Home';
import About from './component/About';
import Carousel from './component/Carousel';
const App = () => {
  return (
    <div>
      {/* Navbar stays on top */}
      <NavBar />
      
      {/* Home section fills the viewport */}
      <div id="home">
        <HomeSection />
      </div>
      
      {/* About section appears below the home section */}
      <div id="about" className="about">
        <About />
      </div>
      <div id="team" className="team">
        <Carousel />
      </div>
    </div>
  );
};

export default App;
