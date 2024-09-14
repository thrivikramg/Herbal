import React, { useState, useRef } from 'react';
import './Carousel.css'; // Ensure you create and import your CSS file
import img1 from '../assets/Tv.jpg'; // Ensure the path is correct
import img2 from '../assets/kavin.jpg';
import img3 from '../assets/Rithika.jpg';
import img4 from '../assets/Nikhitha.jpg';
import img5 from '../assets/chrysll.jpg';
import img6 from '../assets/kowsalya devi.jpg';
const Carousel = ({ children, orientation = 'horizontal' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, React.Children.count(children) - 1));
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={scrollPrev}>‹</button>
      <div className={`carousel-content ${orientation}`} ref={carouselRef}>
        <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {React.Children.map(children, (child, index) => (
            <div className="carousel-item" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button next" onClick={scrollNext}>›</button>
    </div>
  );
};

const CarouselCard = ({ image, name }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <span className="card-text">{name}</span>
      </div>
    </div>
  );
};

const App = () => {
  // Use the imported image variable directly
  const teamMembers = [
    { image: img1, name: 'Thrivikram' },
    { image: img2, name: 'Kavin' },
    { image: img3, name: 'Rithika' },
    { image: img4, name: 'Nikhita' },
    { image: img5, name: 'Chrysl ruth keren' },
    { image: img6, name: 'kowsalya devi' },
  ];

  return (
    <div className='container'>
    <h1 className='team'>Our Team</h1>
    <Carousel orientation="horizontal">
      {teamMembers.map((member, index) => (
        <CarouselCard key={index} image={member.image} name={member.name} />
      ))}
    </Carousel>
    </div>
  );
};

export default App;
