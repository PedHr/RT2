"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radiciacao = void 0;
class Radiciacao {
    calcular(a, b) {
        if (b === 0)
            throw new Error("O índice da raiz não pode ser zero!");
        return Math.pow(a, 1 / b);
    }
}
exports.Radiciacao = Radiciacao;
