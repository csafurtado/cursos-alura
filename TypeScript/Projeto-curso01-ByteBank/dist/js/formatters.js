function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
function formatarData(data, formato = FormatoData.PADRAO) {
    if (formato == FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    }
    else if (formato == FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "2-digit",
        });
    }
    else {
        return data.toLocaleDateString("pt-br");
    }
} // Coloca a data de acesso no formato dd/mm/aaaa e dia da semana
function formataTransacao(valorTransacao, dataTransacao, formatoData = FormatoData.PADRAO) {
    return `${formatarMoeda(valorTransacao)} em ${formatarData(dataTransacao, formatoData)}`;
}
