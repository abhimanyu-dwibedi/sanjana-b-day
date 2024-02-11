import React, { useState, useEffect } from "react";
import "./ImageTransition.css";

const images = [
  "san1.jpeg",
  "san2.jpeg",
  "san3.jpeg",
  "san4.jpeg",
  "san5.jpeg",
  "san6.jpeg",
  "san7.jpeg",
  "san8.jpeg",
  "san9.jpeg",
];

const ImageTransition = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the duration (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  return (
    <div className='image-transition-container'>
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`image ${
            index === currentImageIndex ? "visible" : "hidden"
          }`}
        >
          <img
            className='sanjanaImg'
            src={imageUrl}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageTransition;
