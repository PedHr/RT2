import { Operacao } from "./operacao";

export class Potenciacao implements Operacao {
  calcular(a: number, b: number): number {
    return Math.pow(a, b);
  }
}
