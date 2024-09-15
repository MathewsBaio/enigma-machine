import { useRef, useState } from "react";
import "../style/index.css";
import RotorUI from "./base/RotorUI";
import { I, II, III, IV, V } from "../model/parts/Rotors";
import { reflectorB, reflectorC } from "../model/parts/Reflectors";
import Rotor from "../model/Rotor";

export default function Machine({ message, setMessage }) {
  const [R1, setR1] = useState(new Rotor(I.values, I.reverseValues));
  const [R2, setR2] = useState(new Rotor(II.values, II.reverseValues));
  const [R3, setR3] = useState(new Rotor(III.values, III.reverseValues));
  const [lights, setLights] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
    J: "",
    K: "",
    L: "",
    M: "",
    N: "",
    O: "",
    P: "",
    Q: "",
    R: "",
    S: "",
    T: "",
    U: "",
    V: "",
    W: "",
    X: "",
    Y: "",
    Z: "",
  });
  const UKW = reflectorC;
  const audioRef = useRef(null);
  const audioRef2 = useRef(null);

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

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const cycleRotors = () => {
    R1.rotate();
    R1.position += 1;

    if (R1.position === 26) {
      R1.position = 0;
      R2.rotate();
      audioRef2.current.play();
      R2.position += 1;
    }

    if (R2.position === 26) {
      R2.position = 0;
      R3.rotate();
      audioRef2.current.play();
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
    console.log(`usuario digitou ${letter}`);
    index = letters.findIndex((e) => e === letter.toUpperCase());
    output = R1.values[index];
    console.log(`rotor 1 transformou para ${output}`);

    index = letters.findIndex((e) => e === output.toUpperCase());
    output = R2.values[index];
    console.log(`rotor 2 transformou para ${output}`);

    index = letters.findIndex((e) => e === output.toUpperCase());
    output = R3.values[index];
    console.log(`rotor 3 transformou para ${output}`);

    // Reflector
    index = letters.findIndex((e) => e === output.toUpperCase());
    output = UKW.values[index];
    console.log(`refletor transformou para ${output}`);

    index = letters.findIndex((e) => e === output.toUpperCase());
    output = R3.reverseValues[index];
    console.log(`rotor 3 transformou para ${output}`);

    index = letters.findIndex((e) => e === output.toUpperCase());
    output = R2.reverseValues[index];
    console.log(`rotor 2 transformou para ${output}`);

    index = letters.findIndex((e) => e === output.toUpperCase());
    output = R1.reverseValues[index];
    console.log(`rotor 1 transformou para ${output}`);

    return output;
  };

  const handleTyping = (letter) => {
    const letterEncrypted = encrypt(letter);
    setMessage(message + letterEncrypted);
    setLights((prevLights) => ({
      ...prevLights,
      [letterEncrypted]: "on",
    }));
    playAudio();
    setTimeout(() => {
      stopAudio();
    }, 200);

    setTimeout(() => {
      setLights((prevLights) => ({
        ...prevLights,
        [letterEncrypted]: "",
      }));
    }, 500);
    cycleRotors();
  };

  const handleSpace = () => {
    playAudio();
    setTimeout(() => {
      stopAudio();
    }, 200);
    setMessage(message + " ");
  };
  const handleBackSpace = () => {
    if (message.length != 0) {
      if (message[message.length - 1] !== " ") {
        reverseCycleRotors();
      }
      playAudio();
      setTimeout(() => {
        stopAudio();
      }, 200);
      setMessage(message.slice(0, -1));
    }
  };

  return (
    <div>
      <audio ref={audioRef}>
        <source src="../../audio/typesound.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={audioRef2}>
        <source src="../../audio/rotorsound.mp3" type="audio/mpeg" />
      </audio>
      <div className="rotors">
        <RotorUI open="true" rotor={R3} setRotor={setR3} />
        <RotorUI open="true" rotor={R2} setRotor={setR2} />
        <RotorUI open="true" rotor={R1} setRotor={setR1} />
      </div>
      <div className="keyboards">
        <div className="output-keyboard">
          <div className="keyboard-topline keyboard-line">
            <button disabled className={lights.Q}>
              Q
            </button>
            <button disabled className={lights.W}>
              W
            </button>
            <button disabled className={lights.E}>
              E
            </button>
            <button disabled className={lights.R}>
              R
            </button>
            <button disabled className={lights.T}>
              T
            </button>
            <button disabled className={lights.Z}>
              Z
            </button>
            <button disabled className={lights.U}>
              U
            </button>
            <button disabled className={lights.I}>
              I
            </button>
            <button disabled className={lights.O}>
              O
            </button>
          </div>

          <div className="keyboard-line">
            <button disabled className={lights.A}>
              A
            </button>
            <button disabled className={lights.S}>
              S
            </button>
            <button disabled className={lights.D}>
              D
            </button>
            <button disabled className={lights.F}>
              F
            </button>
            <button disabled className={lights.G}>
              G
            </button>
            <button disabled className={lights.H}>
              H
            </button>
            <button disabled className={lights.J}>
              J
            </button>
            <button disabled className={lights.K}>
              K
            </button>
          </div>

          <div className="keyboard-botline keyboard-line">
            <button disabled className={lights.P}>
              P
            </button>
            <button disabled className={lights.Y}>
              Y
            </button>
            <button disabled className={lights.X}>
              X
            </button>
            <button disabled className={lights.E}>
              C
            </button>
            <button disabled className={lights.V}>
              V
            </button>
            <button disabled className={lights.B}>
              B
            </button>
            <button disabled className={lights.N}>
              N
            </button>
            <button disabled className={lights.M}>
              M
            </button>
            <button disabled className={lights.L}>
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
                handleTyping("W");
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
