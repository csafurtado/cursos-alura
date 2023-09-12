const robotron = document.querySelector(".robo");

const estaticas = document.querySelectorAll("[data-estatisticas]");
const 

const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste")

// Lista de objetos (JSON ou Dicts)
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function dizOi(nome) {
    alert(`Olá Humano ${nome}.`);
}

// Adiciona o escutador de eventos a cada elemento da lista
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent);
        atualizaEstatisticas(evento.target.dataset.peca);
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

// Função que atualiza as estatísticas do robô
function atualizaEstatisticas(peca) {
    console.log(pecas[peca]);
}

// Faz robô falar ao clicar nele
robotron.addEventListener("click", (evento_ocorrido) => {
    dizOi("Cristian");
    console.log(evento_ocorrido);
});

