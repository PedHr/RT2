import { Operacao } from "./operacao";

export class Multiplicacao implements Operacao {
  calcular(a: number, b: number): number {
    return a * b;
  }
}
