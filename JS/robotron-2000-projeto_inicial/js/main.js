const robotron = document.querySelector(".robo");

const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste")

function dizOi(nome) {
    alert(`Olá Humano ${nome}.`);
}

// Soma/subtrai valores quando clicados
somar.addEventListener("click", (evento) => {
    manipulaDados('somar');
})

subtrair.addEventListener("click", (evento) => {
    manipulaDados('subtrair');
})


// Função que soma ou subtrai valores quando clicados
function manipulaDados(operacao) {
    if (operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}

// Faz robô falar ao clicar nele
robotron.addEventListener("click", (evento_ocorrido) => {
    dizOi("Cristian");
    console.log(evento_ocorrido);
});

