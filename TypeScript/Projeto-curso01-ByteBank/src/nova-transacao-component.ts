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
    let tipoTransacao : string = inputTipoTransacao.value;
    let valor : number = inputValor.valueAsNumber;  // Para coletar o string do form já como inteiro
    let data : Date = new Date(inputData.value);        // Para coletar o string do form já como data, e como é uma classe, precisa de new Date (constructor)

    if (tipoTransacao == "Depósito") {
        saldo += valor;
    } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert("Tipo de transação inválido!");
        return;
    }

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    }

    elementoSaldo.textContent = saldo.toString();

    console.log(novaTransacao);
    console.log(saldo);
    elementoFormulario.reset();
})