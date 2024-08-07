import React, { useEffect, useRef, useState } from "react";

import "./DrumMachine.css";

const keyToAudioMapping = {
  Q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  W: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  E: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  A: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  D: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  Z: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  X: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  C: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
};

const DrumMachine = () => {
  const [display, setDisplay] = useState("");
  const audioRefs = useRef([]);

  useEffect(() => {
    // Add event listener for keyboard input
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      const index = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].indexOf(key);
      if (index !== -1) {
        audioRefs.current[index].currentTime = 0;
        audioRefs.current[index].play();
        setDisplay(`Pad ${key}`);
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handlePadClick = (index) => {
    //audioRefs.current[index].play();
    audioRefs.current[index].currentTime = 0;
    audioRefs.current[index].play();
    console.log(audioRefs.current[index]);
    setDisplay(`Pad ${["Q", "W", "E", "A", "S", "D", "Z", "X", "C"][index]}`);
  };

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads">
        {["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].map((key, index) => (
          <div
            key={key}
            className="drum-pad"
            id={key}
            onClick={() => handlePadClick(index)}
          >
            {key}
            <audio
              className="clip"
              id={key}
              src={keyToAudioMapping[key]}
              ref={(ref) => (audioRefs.current[index] = ref)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
