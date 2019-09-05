"use strict";
exports.__esModule = true;
var Piscina = /** @class */ (function () {
    function Piscina(Diametro, custoConstrucao) {
        this.Diametro = Diametro;
        this.custoConstrucao = custoConstrucao;
    }
    Piscina.prototype.Raio = function () {
        return this.Diametro / 2;
    };
    Piscina.prototype.Area = function () {
        return 3.14159 * this.Raio() * this.Raio();
    };
    Piscina.prototype.custoTotal = function () {
        return this.Area() * this.custoConstrucao;
    };
    return Piscina;
}());
exports.Piscina = Piscina;
