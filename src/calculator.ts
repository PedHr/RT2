import { Soma } from "./operations/soma";
import { Subtracao } from "./operations/subtracao";
import { Multiplicacao } from "./operations/multiplicacao";
import { Divisao } from "./operations/divisao";
import { Potenciacao } from "./operations/potenciacao";
import { Radiciacao } from "./operations/radiciacao";
import { Bhaskara } from "./operations/bhaskara";
import { Operacao } from "./operations/operacao";

export class Calculator {
  private operacoes: { [key: string]: Operacao } = {
    "1": new Soma(),
    "2": new Subtracao(),
    "3": new Multiplicacao(),
    "4": new Divisao(),
    "5": new Potenciacao(),
    "6": new Radiciacao(),
  };

  calcular(opcao: string, a: number, b: number): string {
    const operacao = this.operacoes[opcao];
    if (operacao) {
      return `Resultado: ${operacao.calcular(a, b)}`;
    } else {
      return "Opção inválida!";
    }
  }

  calcularBhaskara(a: number, b: number, c: number): string {
    return new Bhaskara().calcular(a, b, c);
  }
}
