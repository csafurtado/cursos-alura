import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";


const elementoRegistroTransacoesExtrato : HTMLElement = document.querySelector('.extrato') as HTMLElement;

renderizarExtrato(); // Já Renderiza o extrato na tela
function renderizarExtrato() : void {
    const gruposTransacoes : GrupoTransacao[] = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = '';
    let htmlRegistroTransacoes : string = '';
    
    // Para cada grupo de transações, cria um HTML com as transações
    for (let grupoTransacao of gruposTransacoes){
        let htmlTransacaoItem: string = "";
        // Cria o HTML de cada transação e junta todos em um grupo (o grupo respectivo)
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
                <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                </div>
                <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
            </div>
            `;
        }
    
        htmlRegistroTransacoes += `
        <div class="transacoes-group">
            <strong class="mes-group">${grupoTransacao.label}</strong>
            ${htmlTransacaoItem}
        </div>`;
    }

    if (htmlRegistroTransacoes == '') {
        htmlRegistroTransacoes = `
        <div>
            Não há transações registradas nesta conta.
        </div
        `
    }

    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;

}

const ExtratoComponent = {
    atualizar() : void {
        renderizarExtrato();
    }
}

export default ExtratoComponent;