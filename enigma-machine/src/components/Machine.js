import { useState } from "react";
import Rotor from "../model/Rotor";

export default function Machine() {
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

  const handleRotation = () => {
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

  return;
}
