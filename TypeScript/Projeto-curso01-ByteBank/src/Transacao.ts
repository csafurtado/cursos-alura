type Transacao = {
    tipoTransacao : TipoTransacao,  // Enum
    valor : number,
    data : Date
}
// Para somente declaração de tipo em um arquivo .ts, seu correspondente em .js estará vazio, pois o JS não cria tipos, apenas o TS faz isso

