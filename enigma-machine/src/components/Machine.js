import { useState } from "react";
import Rotor from "../model/Rotor";

export default function Machine() {
  const [R1, setR1] = useState(new Rotor([]));
  const [R2, setR2] = useState(new Rotor([]));
  const [R3, setR3] = useState(new Rotor([]));
  const [message, setMessage] = useState("");

  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const cycleRotors = () => {
    R1.rotate();
    R1.position += 1;

    if (R1.position === 26) {
      R1.position = 0;
      R2.rotate();
      R2.position += 1;
    }

    if (R2.position === 26) {
      R2.position = 0;
      R3.rotate();
      R3.position += 1;
    }

    if (R3.position === 26) {
      R3.position = 0;
    }
  };

  const encrypt = (letter) => {
    let index, output;

    index = letters.findIndex((e) => e === letter.toUpperCase());
    output = R1.values[index];

    index = letters.findIndex((e) => e === output.toUpperCase());
    output = R2.values[index];

    index = letters.findIndex((e) => e === output.toUpperCase());
    output = R3.values[index];

    return output;
  };

  const handleTyping = (letter) => {
    const letterEncrypted = encrypt(letter);
    setMessage(message + letterEncrypted);
    cycleRotors();
  };

  const handleSpace = () => {
    setMessage(message + " ");
  };
  const handleBackSpace = () => {};

  return (
    <div>
      <textarea value={message} />
      <button
        onClick={() => {
          handleTyping("Q");
        }}
      >
        Q
      </button>
      <button
        onClick={() => {
          handleTyping("A");
        }}
      >
        A
      </button>
      <button
        onClick={() => {
          handleTyping("Z");
        }}
      >
        Z
      </button>

      <button onClick={handleSpace}>Space</button>

      <div>
        {letters.map((e) => {
          return <button>{e}</button>;
        })}
      </div>
    </div>
  );
}
