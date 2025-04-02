import { Operacao } from "./operacao";

export class Radiciacao implements Operacao {
  calcular(a: number, b: number): number {
    if (b === 0) throw new Error("O índice da raiz não pode ser zero!");
    return Math.pow(a, 1 / b);
  }
}
