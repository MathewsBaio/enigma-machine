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
    console.log("Primeiro rotor rotacionou");
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
    console.log(letter + " Valor digitado na máquina");
    index = letters.findIndex((e) => e === letter.toUpperCase());
    output = R1.values[index];
    console.log(output + " Após passar pelo primeiro rotor");

    index = letters.findIndex((e) => e === output.toUpperCase());
    output = R2.values[index];
    console.log(output + " Após passar pelo segundo rotor");
    index = letters.findIndex((e) => e === output.toUpperCase());
    output = R3.values[index];
    console.log(output + " Após passar pelo terceiro rotor");
    return output;
  };

  encrypt("a");
  handleRotation();
  encrypt("a");

  return;
}
