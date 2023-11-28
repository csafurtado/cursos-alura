// const menorNumero = document.getElementById('menor-numero');
// const maiorNumero = document.getElementById('maior-numero');
const menorNumero = 1;
const maiorNumero = 1000;

const numeroSecreto = gerarNumeroAleatorio(); 

document.getElementById('menor-valor').innerHTML = menorNumero;
document.getElementById('maior-valor').innerHTML = maiorNumero;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorNumero + 1);
}