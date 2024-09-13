import { useState } from "react";
import "../style/index.css";
import Rotor from "../model/Rotor";

export default function Machine({ message, setMessage }) {
  const [R1, setR1] = useState(new Rotor([]));
  const [R2, setR2] = useState(new Rotor([]));
  const [R3, setR3] = useState(new Rotor([]));

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

  const reverseCycleRotors = () => {
    R1.reverseRotate();
    R1.position -= 1;

    if (R1.position === -1) {
      R1.position = 25;
      R2.reverseRotate();
      R2.position -= 1;
    }

    if (R2.position === -1) {
      R2.position = 25;
      R3.reverseRotate();
      R3.position -= 1;
    }

    if (R3.position === -1) {
      R3.position = 25;
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
  const handleBackSpace = () => {
    if (message.length != 0) {
      if (message[message.length - 1] !== " ") {
        reverseCycleRotors();
      }

      setMessage(message.slice(0, -1));
    }
  };

  return (
    <div>
      <div className="rotors">
      
      </div>
      <div className="keyboards">
        <div className="input-keyboard">
          <div className="keyboard-topline keyboard-line">
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
              W
            </button>
            <button
              onClick={() => {
                handleTyping("E");
              }}
            >
              E
            </button>
            <button
              onClick={() => {
                handleTyping("R");
              }}
            >
              R
            </button>
            <button
              onClick={() => {
                handleTyping("T");
              }}
            >
              T
            </button>
            <button
              onClick={() => {
                handleTyping("Z");
              }}
            >
              Z
            </button>
            <button
              onClick={() => {
                handleTyping("U");
              }}
            >
              U
            </button>
            <button
              onClick={() => {
                handleTyping("I");
              }}
            >
              I
            </button>
            <button
              onClick={() => {
                handleTyping("O");
              }}
            >
              O
            </button>
          </div>

          <div className="keyboard-line">
            <button
              onClick={() => {
                handleTyping("A");
              }}
            >
              A
            </button>
            <button
              onClick={() => {
                handleTyping("S");
              }}
            >
              S
            </button>
            <button
              onClick={() => {
                handleTyping("D");
              }}
            >
              D
            </button>
            <button
              onClick={() => {
                handleTyping("F");
              }}
            >
              F
            </button>
            <button
              onClick={() => {
                handleTyping("G");
              }}
            >
              G
            </button>
            <button
              onClick={() => {
                handleTyping("H");
              }}
            >
              H
            </button>
            <button
              onClick={() => {
                handleTyping("J");
              }}
            >
              J
            </button>
            <button
              onClick={() => {
                handleTyping("K");
              }}
            >
              K
            </button>
          </div>

          <div className="keyboard-botline keyboard-line">
            <button
              onClick={() => {
                handleTyping("P");
              }}
            >
              P
            </button>
            <button
              onClick={() => {
                handleTyping("Y");
              }}
            >
              Y
            </button>
            <button
              onClick={() => {
                handleTyping("X");
              }}
            >
              X
            </button>
            <button
              onClick={() => {
                handleTyping("C");
              }}
            >
              C
            </button>
            <button
              onClick={() => {
                handleTyping("V");
              }}
            >
              V
            </button>
            <button
              onClick={() => {
                handleTyping("B");
              }}
            >
              B
            </button>
            <button
              onClick={() => {
                handleTyping("N");
              }}
            >
              N
            </button>
            <button
              onClick={() => {
                handleTyping("M");
              }}
            >
              M
            </button>
            <button
              onClick={() => {
                handleTyping("L");
              }}
            >
              L
            </button>
          </div>
        </div>

        <div className="input-keyboard">
          <div className="keyboard-topline keyboard-line">
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
              W
            </button>
            <button
              onClick={() => {
                handleTyping("E");
              }}
            >
              E
            </button>
            <button
              onClick={() => {
                handleTyping("R");
              }}
            >
              R
            </button>
            <button
              onClick={() => {
                handleTyping("T");
              }}
            >
              T
            </button>
            <button
              onClick={() => {
                handleTyping("Z");
              }}
            >
              Z
            </button>
            <button
              onClick={() => {
                handleTyping("U");
              }}
            >
              U
            </button>
            <button
              onClick={() => {
                handleTyping("I");
              }}
            >
              I
            </button>
            <button
              onClick={() => {
                handleTyping("O");
              }}
            >
              O
            </button>
          </div>

          <div className="keyboard-line">
            <button
              onClick={() => {
                handleTyping("A");
              }}
            >
              A
            </button>
            <button
              onClick={() => {
                handleTyping("S");
              }}
            >
              S
            </button>
            <button
              onClick={() => {
                handleTyping("D");
              }}
            >
              D
            </button>
            <button
              onClick={() => {
                handleTyping("F");
              }}
            >
              F
            </button>
            <button
              onClick={() => {
                handleTyping("G");
              }}
            >
              G
            </button>
            <button
              onClick={() => {
                handleTyping("H");
              }}
            >
              H
            </button>
            <button
              onClick={() => {
                handleTyping("J");
              }}
            >
              J
            </button>
            <button
              onClick={() => {
                handleTyping("K");
              }}
            >
              K
            </button>
          </div>

          <div className="keyboard-botline keyboard-line">
            <button
              onClick={() => {
                handleTyping("P");
              }}
            >
              P
            </button>
            <button
              onClick={() => {
                handleTyping("Y");
              }}
            >
              Y
            </button>
            <button
              onClick={() => {
                handleTyping("X");
              }}
            >
              X
            </button>
            <button
              onClick={() => {
                handleTyping("C");
              }}
            >
              C
            </button>
            <button
              onClick={() => {
                handleTyping("V");
              }}
            >
              V
            </button>
            <button
              onClick={() => {
                handleTyping("B");
              }}
            >
              B
            </button>
            <button
              onClick={() => {
                handleTyping("N");
              }}
            >
              N
            </button>
            <button
              onClick={() => {
                handleTyping("M");
              }}
            >
              M
            </button>
            <button
              onClick={() => {
                handleTyping("L");
              }}
            >
              L
            </button>
          </div>

          <div className="keyboard-line">
            <button onClick={handleSpace}>Space</button>
            <button onClick={handleBackSpace}>BackSpace</button>
          </div>
        </div>
      </div>
    </div>
  );
}
