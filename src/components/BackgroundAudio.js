// BackgroundAudio.js
import React, { useState, useEffect } from "react";

function BackgroundAudio() {
  const [audio] = useState(new Audio("music.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audio.play().catch((error) => {
        // If autoplay fails, we'll need to handle it.
        console.error("Autoplay failed:", error);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button type='button' class='btn btn-primary' onClick={togglePlay}>
        {isPlaying ? "Pause Music" : "start"}
      </button>
    </div>
  );
}

export default BackgroundAudio;
