// src/App.js
import React, { useState } from "react";
import BackgroundAnimation from "./components/BackgroundAnimation"; // Make sure the import path is correct
import CarouselComponent from "./components/Carousel";
import "./App.css";
import Balloon from "./components/Balloon";
import ImageTransition from "./components/ImageTransition";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti, { ReactConfetti } from "react-confetti";
import SlidingText from "./components/SlidingText";
function App() {
  // cons, setDaminson] = React.useState(false);
  const [Daminson, setDaminson] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  return (
    <div className='App'>
      <Confetti width={Daminson.width} height={Daminson.height} />
      <BackgroundAnimation />
      <div className='content-container'>
        <h1 className='birthday-message'>Happy Birthday Sanjana urs!</h1>
        <h2 className='birthday-message'>산자나 우르스의 생일을 축하해요!</h2>
        <SlidingText text=' Happy Birthday!,Wishing you a day thats just as wonderful and special as you are.On your birthday, I want you to know how much you mean to me. Youre truly one-of-a-kind. Wishing you a fabulous 23rd birthday! May this chapter of your life be as bright and promising as you are.' />

        <ImageTransition />

        <SlidingText text='당신의 생일에 당신이 나에게 얼마나 큰 의미인지 알려주고 싶습니다. 당신은 정말 독특한 사람이에요. 생일 축하합니다!,당신만큼 멋지고 특별한 하루가 되길 바랍니다. 멋진 23번째 생일을 축하합니다! 당신 인생의 이 장이 당신만큼 밝고 유망해지기를 바랍니다.' />
        <h2> Best wishes from Abhimanyu </h2>
      </div>
    </div>
  );
}

export default App;
