import React from "react";
import "./SlidingText.css";

const SlidingText = ({ text }) => {
  return (
    <div className='slider-text-container'>
      <div className='slider-text'>
        <marquee>
          <h2 className='ye'>{text}</h2>
        </marquee>
      </div>
    </div>
  );
};

export default SlidingText;
