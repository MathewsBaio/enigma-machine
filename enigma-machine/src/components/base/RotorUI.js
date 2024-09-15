import { useRef } from "react";
import Rotor from "../../model/Rotor";

export default function RotorUI({ rotor, setRotor, open }) {
  const audioRef2 = useRef(null);

  const handleTopRotor = (rotor) => {
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

    setRotor(newRotor);
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

  return (
    <div className="rotor">
      <audio ref={audioRef2}>
        <source src="../../audio/rotorsound.mp3" type="audio/mpeg" />
      </audio>
      <button
        className="top-rotor-btn"
        onClick={() => {
          handleTopRotor(rotor);
        }}
      >
        +
      </button>
      <p>{rotor.position + 1}</p>
      <button
        className="bot-rotor-btn"
        onClick={() => {
          handleBotRotor(rotor);
        }}
      >
        -
      </button>
    </div>
  );
}
