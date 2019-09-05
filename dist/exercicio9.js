"use strict";
exports.__esModule = true;
exports.farea = function (comprimento, largura) { return (comprimento * largura); };
exports.parimpar = function (num) {
    if (num % 2 == 0)
        return true;
    else
        return false;
};
exports.fcubo = function (CUBO) { return (Math.pow(CUBO, 3)); };
console.log("O Cubo \u00E9 " + exports.fcubo(CUBO));
