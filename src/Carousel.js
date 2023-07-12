import React, { useState } from 'react';
import './Carousel.css';

function Carousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleClickNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-prev" onClick={handleClickPrev}>
        &#8249;
      </button>
      <div className="carousel-content">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-next" onClick={handleClickNext}>
        &#8250;
      </button>
    </div>
  );
}

export default Carousel;
