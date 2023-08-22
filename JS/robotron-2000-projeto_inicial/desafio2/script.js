const botao_calculo = document.querySelector('#calcular');

function detectaClique() {
    alert('Fui Clicado!');
}

botao_calculo.addEventListener("click", () => {
    detectaClique();
})