var saldo = 3000;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
var elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoSaldo.textContent = saldo.toString();
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Preencha todos os campos do formulário antes de enviá-lo!");
        return;
    }
    var inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    // Define o tipo da variável
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber; // Para coletar o string do form já como inteiro
    var data = new Date(inputData.value); // Para coletar o string do form já como data, e como é uma classe, precisa de new Date (constructor)
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação inválido!");
        return;
    }
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    elementoSaldo.textContent = saldo.toString();
    console.log(novaTransacao);
    console.log(saldo);
    elementoFormulario.reset();
});
// SOLUÇÃO EM JAVASCRIPT
// let saldo = 3000;
// const elementoSaldo = document.querySelector(".saldo-valor .valor")
// const elementoFormulario = document.querySelector(".block-nova-transacao form")
// elementoSaldo.textContent = saldo;
// elementoFormulario.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     if (!elementoFormulario.checkValidity()) {
//         alert("Preencha todos os campos do formulário antes de enviá-lo!");
//         return;
//     }
//     const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
//     const inputValor = elementoFormulario.querySelector("#valor");
//     const inputData = elementoFormulario.querySelector("#data");
//     let tipoTransacao = inputTipoTransacao.value;
//     let valor = parseInt(inputValor.value);
//     let data = inputData.value;
//     if (tipoTransacao == "Depósito") {
//         saldo += valor;
//     } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
//         saldo -= valor;
//     } else {
//         alert("Tipo de transação inválido!");
//         return;
//     }
//     const novaTransacao = {
//         tipoTransacao: tipoTransacao,
//         valor: valor,
//         data: data,
//     }
//     elementoSaldo.textContent = saldo;
//     console.log(novaTransacao);
//     console.log(saldo);
//     elementoFormulario.reset();
// })
