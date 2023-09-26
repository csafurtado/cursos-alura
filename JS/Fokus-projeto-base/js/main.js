const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const musicaFocoInput = document.getElementById('alternar-musica');
const audioMusica = new Audio('./sons/luna-rise-part-one.mp3'); // Cria uma novo objeto de Áudio que tem essa origem (diretório)
const audioPlay = new Audio('./sons/play.wav');
const audioPause = new Audio('./sons/pause.mp3');
const audioFim = new Audio('./sons/beep.mp3');

const startPauseBt = document.querySelector('#start-pause');

let tempoDecorridoEmSegundos = 5; // É let porque é um valor que muda

audioMusica.loop = true;    // Mantém o áudio em loop caso ele acabe
intervaloId = null;

// Adiciona escutador de evento no botão inputs de checkbox
musicaFocoInput.addEventListener('change', () => {
    if (audioMusica.paused) {
        audioMusica.play();
    } else {
        audioMusica.pause();
    }
})

// Adiciona escutador de evento no botão de foco e de descanso curto
focoBt.addEventListener('click', () => {
    alterarContexto('foco');
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
});

function alterarContexto(contexto) {
    // Remove sempre a propriedade de ativo para todos os botões ao clique, para
    // que não haja acúmulo de botões com a mesma classe
    document.querySelectorAll('.app__card-button').forEach((botao) => {
        botao.classList.remove('active');
    })
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`;
            focoBt.classList.add('active');            
    
            break;

        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            curtoBt.classList.add('active');
            break;

        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`;
            longoBt.classList.add('active');
            break;

        default:
            break;
    }


    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
}

// Função que retorna uma constante (Arrow Function)
const contagemRegressiva = () => {

    if(tempoDecorridoEmSegundos <= 0){
        audioFim.play();
        zerar();
        alert('Tempo finalizado!');
        return
    }
    tempoDecorridoEmSegundos -= 1;
    console.log('Temporizador: ' + tempoDecorridoEmSegundos);
}

startPauseBt.addEventListener('click', iniciarOuPausar);

// Função que deixa o id do intervalo  null
function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
}

// Função que inicia ou pausa o intervalo, atribuindo o id dele 
function iniciarOuPausar(){
    if(intervaloId){ // Se o intervalo estiver rolando
        zerar();
        audioPause.play();
        return;
    } else {         // Se o intervalo NÃO estiver rolando
        audioPlay.play();
        intervaloId = setInterval(contagemRegressiva, 1000);
        
        if (tempoDecorridoEmSegundos <= 0) { // Se o tempo tiver acabado          
            tempoDecorridoEmSegundos = 5;
        }
    }

}