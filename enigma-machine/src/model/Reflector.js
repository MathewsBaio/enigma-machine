export default class Reflector {
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
  }
}
