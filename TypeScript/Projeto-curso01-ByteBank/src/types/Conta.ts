import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";

let saldo : number = 3000; 


const Conta = {
    getSaldo() : number {
        return saldo;
    },

    getDataAcesso() : Date {
        return new Date();
    },

    registrarTransacao(novaTransacao : Transacao) : void {
        if (novaTransacao.tipoTransacao == "Depósito") {
            saldo += novaTransacao.valor;
        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        } else {
            alert("Tipo de transação inválido!");
            return;
        }
    }
}

export default Conta;  // Não é obrigatório colocar o 'default' aqui, é apenas uma conveção para quando quer se exportar apenas um item 