import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button onClick={prevItem}>Previous</button>
      {items.map((item, index) => (
        <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
          {item}
        </div>
      ))}
      <button onClick={nextItem}>Next</button>
    </div>
  );
};

export default Carousel;
