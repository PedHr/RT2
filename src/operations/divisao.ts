import { Operacao } from "./operacao";

export class Divisao implements Operacao {
  calcular(a: number, b: number): number {
    if (b === 0) throw new Error("Não é possível dividir por zero!");
    return a / b;
  }
}
