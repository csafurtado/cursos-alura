// TIPOS PRIMITIVOS
let valor = 3000; // O TS vai garantir que esta variavel continue do tipo number durante todo o código
let valorString = "3000"; // O TS vai garantir que esta variavel continue do tipo string durante todo o código
let qualquerValor = 3000; // O TS vai permitir que esta variavel mude seu tipo
let valorBuleano = true; // O TS vai garantir que esta variavel continue do tipo boolean durante todo o código
// TIPOS DE ARRAYS
let arrayQQ = []; // Lista que permite em si elemento de qualquer tipo
let arrayNumeros = [1, 2, 3, 4, 5]; // Lista que permite em si apenas elementos do tipo number
// ENUMS (Conjunto de possíveis valores fixos para uma variável, como um typedef em C, mas com valores fixos)
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    valor: 4000,
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    isAtivada: true,
};