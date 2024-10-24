import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProdutos";
import RemoverProdutos from "../negocio/removerProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemServicos from "../negocio/listagemServicos";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar produtos`);
    console.log(`5 - Remover produto`);
    console.log(`6 - Adicionar servicos`);
    console.log(`7 - Listar serviços`);
    console.log(`8 - Listar produtos`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let cad_prod = new CadastroProduto(empresa.getProdutos)
            cad_prod.cadastrar()
            break;
        case 4:
            let list_prod = new ListagemProdutos(empresa.getProdutos)
            list_prod.listar()
            break;
        case 5:
            let rem_prod = new RemoverProdutos(empresa.getProdutos)
            rem_prod.remover()
            break;
        case 6:
            let cad_serv = new CadastroServico(empresa.getServicos)
            cad_serv.cadastrar()
            break;
        case 7:
            let list_serv = new ListagemServicos(empresa.getServicos)
            list_serv.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}