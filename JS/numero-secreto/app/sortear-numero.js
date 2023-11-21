const numeroSecreto = gerarNumeroAleatorio();
// const menorNumero = document.getElementById('menor-numero');
// const maiorNumero = document.getElementById('maior-numero');
const menorNumero = 1;
const maiorNumero = 1000;

document.getElementById('menor-numero').innerHTML = menorNumero;
document.getElementById('maior-numero').innerHTML = maiorNumero;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorNumero + 1);
}