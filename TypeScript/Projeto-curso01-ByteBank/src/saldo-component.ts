let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLSpanElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

elementoSaldo.textContent = formatarMoeda(saldo);

const dataAcesso : Date = new Date();

elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);