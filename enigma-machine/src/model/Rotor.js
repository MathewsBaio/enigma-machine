export default class Rotor {
  constructor(array, reverseArray) {
    this.values = array;
    this.reverseValues = reverseArray;
    this.position = 0;
    // if (array.length === 26) {
    //   this.values = array;
    // } else {
    //   this.values = [
    //     "Z",
    //     "Y",
    //     "X",
    //     "W",
    //     "V",
    //     "U",
    //     "T",
    //     "S",
    //     "R",
    //     "Q",
    //     "P",
    //     "O",
    //     "N",
    //     "M",
    //     "L",
    //     "K",
    //     "J",
    //     "I",
    //     "H",
    //     "G",
    //     "F",
    //     "E",
    //     "D",
    //     "C",
    //     "B",
    //     "A",
    //   ];
  }

  generateInverseRotor(rotor) {
    const inverseRotor = Array(26); // Cria um array vazio de 26 posições

    // Loop através do rotor original
    for (let i = 0; i < rotor.length; i++) {
      const letter = rotor[i]; // Pega a letra do rotor original
      const index = letter.charCodeAt(0) - "A".charCodeAt(0); // Calcula o índice da letra no alfabeto (A=0, B=1, etc.)

      // No array inverso, colocamos a letra correspondente ao índice da posição atual
      inverseRotor[index] = String.fromCharCode(i + "A".charCodeAt(0));
    }

    return inverseRotor;
  }

  rotate() {
    let aux = this.values[this.values.length - 1];
    for (let i = this.values.length - 1; i > 0; i--) {
      this.values[i] = this.values[i - 1];
    }
    this.values[0] = aux;

    this.reverseValues = this.generateInverseRotor(this.values);
  }

  reverseRotate() {
    let aux = this.values[0];
    for (let i = 0; i < this.values.length - 1; i++) {
      this.values[i] = this.values[i + 1];
    }
    this.values[this.values.length - 1] = aux;

    this.reverseValues = this.generateInverseRotor(this.values);
  }
}
