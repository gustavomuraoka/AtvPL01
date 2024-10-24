"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var remover_1 = require("./remover");
var entrada_1 = require("../io/entrada");
var RemoverProdutos = /** @class */ (function (_super) {
    __extends(RemoverProdutos, _super);
    function RemoverProdutos(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    RemoverProdutos.prototype.remover = function () {
        var _this = this;
        var nome = this.entrada.receberTexto("Por favor informe o nome do produto: ");
        var count = 0;
        this.produtos.forEach(function (produto) {
            if (produto.nome === nome) {
                _this.produtos.splice(count, 1);
            }
            count += 1;
        });
        console.log("\n");
    };
    return RemoverProdutos;
}(remover_1.default));
exports.default = RemoverProdutos;
