// src/components/BackgroundAnimation.js
import React from "react";
import BalloonAnimation from "./BalloonAnimation";
import "./BackgroundAnimation.css";

const BackgroundAnimation = () => {
  return (
    <div className='background-animation'>
      <BalloonAnimation />
      <BalloonAnimation /> <BalloonAnimation />
      <BalloonAnimation />
      {/* Your additional background animation content */}
    </div>
  );
};

export default BackgroundAnimation;
