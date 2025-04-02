"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
const soma_1 = require("./operations/soma");
const subtracao_1 = require("./operations/subtracao");
const multiplicacao_1 = require("./operations/multiplicacao");
const divisao_1 = require("./operations/divisao");
const potenciacao_1 = require("./operations/potenciacao");
const radiciacao_1 = require("./operations/radiciacao");
const bhaskara_1 = require("./operations/bhaskara");
class Calculator {
    constructor() {
        this.operacoes = {
            "1": new soma_1.Soma(),
            "2": new subtracao_1.Subtracao(),
            "3": new multiplicacao_1.Multiplicacao(),
            "4": new divisao_1.Divisao(),
            "5": new potenciacao_1.Potenciacao(),
            "6": new radiciacao_1.Radiciacao(),
        };
    }
    calcular(opcao, a, b) {
        const operacao = this.operacoes[opcao];
        if (operacao) {
            return `Resultado: ${operacao.calcular(a, b)}`;
        }
        else {
            return "Opção inválida!";
        }
    }
    calcularBhaskara(a, b, c) {
        return new bhaskara_1.Bhaskara().calcular(a, b, c);
    }
}
exports.Calculator = Calculator;
