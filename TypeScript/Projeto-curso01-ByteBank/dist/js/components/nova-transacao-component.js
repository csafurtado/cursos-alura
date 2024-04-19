import SaldoComponent from "./saldo-component.js";
import Conta from "../types/Conta.js";
import ExtratoComponent from "./extrato-component.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", (event) => {
    try {
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
        let data = new Date(inputData.value + " 00:00:00"); // Para coletar o string do form já como data, e como é uma classe, precisa de new Date (constructor), e o + " 00:00:00" é para o JS pegar a data no mesmo dia ao invés do dia anterior
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        };
        Conta.registrarTransacao(novaTransacao); // Registra a transação
        console.log(novaTransacao);
        SaldoComponent.atualizar(); // Atualiza o saldo na tela
        ExtratoComponent.atualizar(); // Atualiza o extrato na tela
        elementoFormulario.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
