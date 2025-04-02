"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisao = void 0;
class Divisao {
    calcular(a, b) {
        if (b === 0)
            throw new Error("Não é possível dividir por zero!");
        return a / b;
    }
}
exports.Divisao = Divisao;
