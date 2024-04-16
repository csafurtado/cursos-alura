const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Preencha todos os campos do formulário antes de enviá-lo!");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    // Define o tipo da variável
    let tipoTransacao = inputTipoTransacao.value; // Define esse valor como sendo do tipo TipoTransacao, ou seja, um dos valores dentro dessa enum 
    let valor = inputValor.valueAsNumber; // Para coletar o string do form já como inteiro
    let data = new Date(inputData.value); // Para coletar o string do form já como data, e como é uma classe, precisa de new Date (constructor)
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação inválido!");
        return;
    }
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    ;
    console.log(novaTransacao);
    console.log(saldo);
    elementoFormulario.reset();
});
