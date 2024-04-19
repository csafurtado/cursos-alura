import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import SaldoComponent from "./saldo-component.js";
import Conta from "../types/Conta.js";
import ExtratoComponent from "./extrato-component.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoFormulario.addEventListener("submit", (event)=>{
    try {
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
        let data : Date = new Date(inputData.value + " 00:00:00");        // Para coletar o string do form já como data, e como é uma classe, precisa de new Date (constructor), e o + " 00:00:00" é para o JS pegar a data no mesmo dia ao invés do dia anterior

        const novaTransacao : Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        }

        Conta.registrarTransacao(novaTransacao); // Registra a transação

        console.log(novaTransacao);
        SaldoComponent.atualizar(); // Atualiza o saldo na tela
        ExtratoComponent.atualizar(); // Atualiza o extrato na tela
        elementoFormulario.reset();

    } catch (erro) {
        alert(erro.message);
    }
})
