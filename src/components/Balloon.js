// src/components/Balloon.js
import React from "react";
import { useSpring, animated } from "react-spring";
import "./Balloon.css";

const Balloon = () => {
  const props = useSpring({
    to: async (next) => {
      while (true) {
        await next({ translateY: -100, rotate: 180, opacity: 0 });
        await next({ translateY: 0, rotate: 0, opacity: 1 });
      }
    },
    from: { translateY: 0, rotate: 0, opacity: 1 },
    config: { duration: 5000 },
  });

  return <animated.div className='balloon' style={props}></animated.div>;
};

export default Balloon;
