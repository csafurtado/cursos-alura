import { formatarMoeda, formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
renderizaSaldo();
function renderizaSaldo() {
    elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
}
const SaldoComponent = {
    atualizar() {
        renderizaSaldo();
    }
};
export default SaldoComponent; // Não é obrigatório colocar o 'default' aqui, é apenas uma conveção para quando quer se exportar apenas um item
