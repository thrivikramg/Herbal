import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fas fa-tree"></i>Herbify.
      </a>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#Herbify">Herbify</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
