import { Operacao } from "./operacao";

export class Subtracao implements Operacao {
  calcular(a: number, b: number): number {
    return a - b;
  }
}
