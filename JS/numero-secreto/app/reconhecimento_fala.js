const elementoChute = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const reconhecimento = new SpeechRecognition();
reconhecimento.lang = 'pt-br';

// Inicia o reconhecimento de voz (ativa o microfone)
reconhecimento.start();

reconhecimento.addEventListener('result', onSpeak);

function onSpeak(e) {
    // Printa o evento ativado
    // console.log(e);
    chute = e.results()[0][0].transcript;

    exibeChuteNaTela(chute);

    // Printa somente o resultado do processamento da voz (Tem muita coisa dentro desse evento kkkk)
    console.log(e.results()[0][0].transcript)
}

function exibeChuteNaTela(chute) {    
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}