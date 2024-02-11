// src/components/Carousel.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const CarouselComponent = () => {
  return (
    <div className='carousel-container'>
      <Carousel>
        {/* Add your carousel items (images, messages, etc.) */}
        <div>
          rrfrr
          <img
            className='sanjanaImg'
            // crossorigin='anonymous'
            src='imgd.jpeg'
            alt='Carousel Item 1'
          />
        </div>
        <div>
          <img className='sanjanaImg' src='imgd.jpeg' alt='Carousel Item 2' />
        </div>
        {/* Add more items as needed */}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
