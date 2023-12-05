function verificaChute() {
    const numero = +chute; // Já tenta converter para inteiro

    // Verifica se o usuário quer encerrar o jogo antes ao falar "GAME OVER"
    if (chute.toUpperCase() == 'GAME OVER') {
        document.body.innerHTML = `
        <h2>GAME OVER!</h2>
        <h3>Vamos jogar de novo?</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;

        document.body.style.backgroundColor = 'red';
        return;
    }

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
        // console.log("Valor Invalido!");
    }

    if (numeroForaDoRange(numero)) {
        elementoChute.innerHTML += `<div>Número precisa estar entre ${menorNumero} e ${maiorNumero}</div>`;
        // console.log(`Número precisa estar entre ${menorNumero} e ${maiorNumero}`);
    }

    if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
    }
    
    if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
    }
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!!!!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `;
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoRange(numero) {
    return numero > maiorNumero || numero < menorNumero;
}


// Permite o jogo recomeçar através do clique do botão de jogar novamente
document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})