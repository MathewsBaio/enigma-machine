export default class Rotor {
  constructor(array) {
    if (array.length === 26) {
      this.values = array;
    } else {
      this.values = [
        "Z",
        "Y",
        "X",
        "W",
        "V",
        "U",
        "T",
        "S",
        "R",
        "Q",
        "P",
        "O",
        "N",
        "M",
        "L",
        "K",
        "J",
        "I",
        "H",
        "G",
        "F",
        "E",
        "D",
        "C",
        "B",
        "A",
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

  reverseRotate() {
    let aux = this.values[0];
    for (let i = 0; i < this.values.length - 1; i++) {
      this.values[i] = this.values[i + 1];
    }
    this.values[this.values.length - 1] = aux;
  }
}
