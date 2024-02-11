// src/components/BalloonAnimation.js
import React from "react";
import { animated, useSpring } from "react-spring";
import "./BalloonAnimation.css";

const BalloonAnimation = () => {
  const styles = useSpring({
    from: { transform: "translateY(0)" },
    to: { transform: "translateY(-100vh)" },
    config: { duration: 8000 },
  });

  return (
    <animated.div className='balloon-animation' style={styles}></animated.div>
  );
};

export default BalloonAnimation;
