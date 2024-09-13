export default class Rotor {
  constructor(array) {
    if (array.length === 26) {
      this.values = array;
    } else {
      this.values = [
        "G",
        "M",
        "D",
        "Z",
        "E",
        "K",
        "X",
        "J",
        "F",
        "A",
        "L",
        "Q",
        "I",
        "C",
        "H",
        "N",
        "V",
        "R",
        "W",
        "S",
        "T",
        "U",
        "B",
        "O",
        "P",
        "Y",
      ];
    }

    this.position = 0;
  }

  rotate() {
    let aux = this.values[this.values.length - 1];
    for (let i = this.values.length - 1; i > 0; i--) {
      this.values[i] = this.values[i - 1];
    }
    this.values[0] = aux;
  }
}
