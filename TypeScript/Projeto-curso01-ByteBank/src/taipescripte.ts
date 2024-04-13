// TIPOS PRIMITIVOS
let valor = 3000;       // O TS vai garantir que esta variavel continue do tipo number durante todo o código
let valorString : string = "3000";       // O TS vai garantir que esta variavel continue do tipo string durante todo o código
let qualquerValor : any = 3000;       // O TS vai permitir que esta variavel mude seu tipo
let valorBuleano : boolean = true;       // O TS vai garantir que esta variavel continue do tipo boolean durante todo o código

// TIPOS DE ARRAYS
let arrayQQ = [];       // Lista que permite em si elemento de qualquer tipo
let arrayNumeros : number[] = [1, 2, 3, 4, 5];       // Lista que permite em si apenas elementos do tipo number


// TIPOS PERSONALIZADOS (tipo um typedef em C, mas se chama 'type alias')
type Transacao = {
    valor: number,
    tipoTransacao: string,
    data: Date,
    isAtivada: boolean,
}

// ENUMS (Conjunto de possíveis valores fixos para uma variável, como um typedef em C, mas com valores fixos)
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto",
}

const novaTransacao : Transacao = {
    valor: 4000,
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    isAtivada: true,
}


