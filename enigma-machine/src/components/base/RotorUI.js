import { useRef, useState } from "react";
import Rotor from "../../model/Rotor";

export default function RotorUI({ rotor, setRotor, open }) {
  const audioRef2 = useRef(null);

  const handleTopRotor = (rotor, direction) => {
    let newRotor = new Rotor(rotor.values, rotor.reverseValues);
    newRotor.position = rotor.position;
    if (newRotor.position === 0) {
      newRotor.position = 25;
      newRotor.reverseRotate();
      audioRef2.current.play();
    } else {
      newRotor.position -= 1;
      newRotor.reverseRotate();

      audioRef2.current.play();
    }

    setRotor(newRotor); // hello
  };

  const handleBotRotor = (rotor) => {
    let newRotor = new Rotor(rotor.values, rotor.reverseValues);
    newRotor.position = rotor.position;
    if (newRotor.position === 25) {
      newRotor.position = 0;
      newRotor.rotate();
      audioRef2.current.play();
    } else {
      newRotor.position += 1;
      newRotor.rotate();
      audioRef2.current.play();
    }

    setRotor(newRotor);
  };

  const isLessThanTen = (number) => {
    if (number.toString().length === 1 && number !== 9) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="external-rotor">
      <div className="rotor-window">
        <p className={`rotor-number`}>
          {isLessThanTen(rotor.position)
            ? `0${rotor.position + 1}`
            : rotor.position + 1}
        </p>
      </div>
      <div className="rotor">
        <audio ref={audioRef2}>
          <source src="../../audio/rotorsound.mp3" type="audio/mpeg" />
        </audio>
        <button
          className="top-rotor-btn"
          onClick={() => {
            handleTopRotor(rotor, "down");
          }}
        ></button>
        <p></p>
        <button
          className="bot-rotor-btn"
          onClick={() => {
            handleBotRotor(rotor);
          }}
        ></button>
      </div>
    </div>
  );
}
