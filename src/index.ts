import * as readline from "readline";
import { Calculator } from "./calculator";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta: string): Promise<string> {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function main() {
  const calc = new Calculator();

  while (true) {
    console.log("\nEscolha uma operação:");
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");
    console.log("5 - Potenciação");
    console.log("6 - Radiciação");
    console.log("7 - Bhaskara");
    console.log("0 - Sair");

    let opcao = await perguntar("Digite a opção: ");

    if (opcao === "0") {
      console.log("Encerrando calculadora...");
      break;
    }

    if (opcao === "7") {
      let a = parseFloat(await perguntar("Digite o valor de a: "));
      let b = parseFloat(await perguntar("Digite o valor de b: "));
      let c = parseFloat(await perguntar("Digite o valor de c: "));
      console.log(calc.calcularBhaskara(a, b, c));
    } else {
      let a = parseFloat(await perguntar("Digite o primeiro número: "));
      let b = parseFloat(await perguntar("Digite o segundo número: "));
      console.log(calc.calcular(opcao, a, b));
    }
  }

  rl.close();
}

main();
