const robotron = document.querySelector(".robo");

const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste")

function dizOi(nome) {
    alert(`Olá Humano ${nome}.`);
}

// Adiciona o escutador de eventos a cada elemento da lista
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent);
    })
})


// Função que soma ou subtrai valores quando clicados
function manipulaDados(operacao) {
    const peca = controle.querySelector(".controle-contador");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

// Faz robô falar ao clicar nele
robotron.addEventListener("click", (evento_ocorrido) => {
    dizOi("Cristian");
    console.log(evento_ocorrido);
});

