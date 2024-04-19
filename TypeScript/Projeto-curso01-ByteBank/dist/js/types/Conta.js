import { TipoTransacao } from "./TipoTransacao.js";
let saldo = Number(JSON.parse(localStorage.getItem("saldo"))) || 0; // Se não tiver nada no localStorage, retorna 0, senão retorna o que tiver lá
// Se não tiver nada no localStorage, retorna um array vazio, senão retorna o que tiver lá com tratamento para o campo de data
const transacoes = JSON.parse(localStorage.getItem("transacoes"), (key, value) => {
    if (key == "data") {
        return new Date(value);
    }
    return value;
}) || [];
function debitar(valor) {
    if (valor > saldo) {
        throw new Error("Saldo insuficiente para realizar débito!");
    }
    if (valor <= 0) {
        throw new Error("Valor inválido para operação!");
    }
    saldo -= valor;
    localStorage.setItem("saldo", JSON.stringify(saldo.toString()));
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error("Valor inválido para operação!");
    }
    saldo += valor;
    localStorage.setItem("saldo", JSON.stringify(saldo.toString()));
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(transacoes); // Para não alterar o array original de transações
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime()); // Ordena as transações por data de forma descrescente (mais recente)
        let labelAtualGrupoTransação = "";
        // Verifica a necessidade de criar um novo grupo de datas no caso de uma nova transação
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransação != labelGrupoTransacao) {
                labelAtualGrupoTransação = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: [],
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao); // Adiciona a transação ao grupo de transações
        }
        return gruposTransacoes;
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == "Depósito") {
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else {
            alert("Tipo de transação inválido!");
            throw new Error("Tipo de transação inválido!");
        }
        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    },
    getAgrupaTransacoesPorTipo() {
        let registroTransacoes;
        for (let transacao of transacoes) { // Foreach do JS
            if (transacao.tipoTransacao == TipoTransacao.DEPOSITO)
                registroTransacoes.totalDepositos += 1;
            if (transacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO)
                registroTransacoes.totalPagamentosBoleto += 1;
            if (transacao.tipoTransacao == TipoTransacao.TRANSFERENCIA)
                registroTransacoes.totalTransferencias += 1;
        }
        return registroTransacoes;
    }
};
export default Conta; // Não é obrigatório colocar o 'default' aqui, é apenas uma conveção para quando quer se exportar apenas um item 
