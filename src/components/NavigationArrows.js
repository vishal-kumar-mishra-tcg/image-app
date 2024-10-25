// src/components/NavigationArrows.js
import React from "react";

function NavigationArrows({currentIndex, setCurrentIndex, totalImages }) {
  // Function to go to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <button onClick={handlePrev} className="nav-arrow left-arrow">⬅️</button>
      <button onClick={handleNext} className="nav-arrow right-arrow">➡️</button>
    </div>
  );
}

export default NavigationArrows;
