const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const musicaFocoInput = document.getElementById('alternar-musica');
const audioMusica = new Audio('./sons/luna-rise-part-one.mp3'); // Cria uma novo objeto de Áudio que tem essa origem (diretório)
audioMusica.loop = true;    // Mantém o áudio em loop caso ele acabe


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