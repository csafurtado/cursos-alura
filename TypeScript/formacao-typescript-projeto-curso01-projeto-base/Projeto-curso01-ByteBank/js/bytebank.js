let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor")
const elementoFormulario = document.querySelector(".block-nova-transacao form")

elementoSaldo.textContent = saldo;

elementoFormulario.addEventListener("submit", (event)=>{
    event.preventDefault();

    if (!elementoFormulario.checkValidity()) {
        alert("Preencha todos os campos do formulário antes de enviá-lo!");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");

    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    }

    if (tipoTransacao == "Depósito")
        saldo += valor;

    console.log(novaTransacao);
    elementoFormulario.reset();

})