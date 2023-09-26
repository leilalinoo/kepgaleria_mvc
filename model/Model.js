import { KEPLISTA } from "./adat.js";

class Model {
  #lista = [];
  #id;
  constructor() {
    this.#lista = KEPLISTA;
    this.#id = 0;
  }

  jobb() {
    this.#id++;
    if (this.#id >= this.#lista.length) {
      this.#id = 0;
    }
  }

  bal() {
    this.#id--;
    if (this.#id < 0) {
      this.#id = this.#lista.length - 1;
    }
  }

  getAktKep() {
    return this.#lista[this.#id];
  }

  getList() {
    return this.#lista;
  }
}

export default Model;
