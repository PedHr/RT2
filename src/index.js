"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const calculator_1 = require("./calculator");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function perguntar(pergunta) {
    return new Promise((resolve) => rl.question(pergunta, resolve));
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const calc = new calculator_1.Calculator();
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
            let opcao = yield perguntar("Digite a opção: ");
            if (opcao === "0") {
                console.log("Encerrando calculadora...");
                break;
            }
            if (opcao === "7") {
                let a = parseFloat(yield perguntar("Digite o valor de a: "));
                let b = parseFloat(yield perguntar("Digite o valor de b: "));
                let c = parseFloat(yield perguntar("Digite o valor de c: "));
                console.log(calc.calcularBhaskara(a, b, c));
            }
            else {
                let a = parseFloat(yield perguntar("Digite o primeiro número: "));
                let b = parseFloat(yield perguntar("Digite o segundo número: "));
                console.log(calc.calcular(opcao, a, b));
            }
        }
        rl.close();
    });
}
main();
