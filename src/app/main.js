"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var empresa_1 = require("../modelo/empresa");
var cadastroCliente_1 = require("../negocio/cadastroCliente");
var listagemClientes_1 = require("../negocio/listagemClientes");
var cadastroProduto_1 = require("../negocio/cadastroProduto");
var listagemProdutos_1 = require("../negocio/listagemProdutos");
var removerProduto_1 = require("../negocio/removerProduto");
var cadastroServico_1 = require("../negocio/cadastroServico");
var listagemServicos_1 = require("../negocio/listagemServicos");
console.log("Bem-vindo ao melhor sistema de gerenciamento de pet shops e cl\u00EDnicas veterinarias");
var empresa = new empresa_1.default();
var execucao = true;
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Cadastrar produto");
    console.log("4 - Listar produtos");
    console.log("5 - Remover produto");
    console.log("6 - Adicionar servicos");
    console.log("7 - Listar servi\u00E7os");
    console.log("8 - Listar produtos");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var cad_prod = new cadastroProduto_1.default(empresa.getProdutos);
            cad_prod.cadastrar();
            break;
        case 4:
            var list_prod = new listagemProdutos_1.default(empresa.getProdutos);
            list_prod.listar();
            break;
        case 5:
            var rem_prod = new removerProduto_1.default(empresa.getProdutos);
            rem_prod.remover();
            break;
        case 6:
            var cad_serv = new cadastroServico_1.default(empresa.getServicos);
            cad_serv.cadastrar();
            break;
        case 7:
            var list_serv = new listagemServicos_1.default(empresa.getServicos);
            list_serv.listar();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
