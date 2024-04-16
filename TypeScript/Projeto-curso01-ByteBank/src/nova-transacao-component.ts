const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoFormulario.addEventListener("submit", (event)=>{
    event.preventDefault();

    if (!elementoFormulario.checkValidity()) {
        alert("Preencha todos os campos do formulário antes de enviá-lo!");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    // Define o tipo da variável
    let tipoTransacao : TipoTransacao = inputTipoTransacao.value as TipoTransacao;     // Define esse valor como sendo do tipo TipoTransacao, ou seja, um dos valores dentro dessa enum 
    let valor : number = inputValor.valueAsNumber;  // Para coletar o string do form já como inteiro
    let data : Date = new Date(inputData.value);        // Para coletar o string do form já como data, e como é uma classe, precisa de new Date (constructor)

    if (tipoTransacao == "Depósito") {
        saldo += valor;
    } else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    } else {
        alert("Tipo de transação inválido!");
        return;
    }

    const novaTransacao : Transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    }

    elementoSaldo.textContent = saldo.toLocaleString("pt-br", {style: "currency", currency: "BRL"});;

    console.log(novaTransacao);
    console.log(saldo);
    elementoFormulario.reset();
})
