import { formatarMoeda, formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";


const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLSpanElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);

renderizaSaldo();
function renderizaSaldo() : void { // Exporta a função setSaldo, que atualiza o saldo
    elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
}

const SaldoComponent = {
    atualizar() {
        renderizaSaldo();
    }
}

export default SaldoComponent;  // Não é obrigatório colocar o 'default' aqui, é apenas uma conveção para quando quer se exportar apenas um item