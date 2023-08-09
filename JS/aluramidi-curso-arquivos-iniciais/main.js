function tocaSom(idAudio){
    const elemento = document.querySelector(idAudio);

    if (elemento === null){
        alert("Elemento não encontrado!");
    } 

    if (elemento && elemento.localName === 'audio' ) {  // Se elemento for diferente de nulo, undefined e etc e for um <audio>
        elemento.currentTime = 0;
        elemento.play();
    } else {
        alert("Elemento inválido!");
    }
}

// Função que adiciona a funcionalidade de clicar no teclado numérico e tocar um som correspondente
function tocaComTecladoNumerico (){
    // Adiciona o escutador de eventos de teclas pressionadas
    document.addEventListener('keydown', function(evento){
        if (evento.key === '7'){
            tecla = listaTeclas[0];
            instrumento = tecla.classList[1];
            idAudio = `#som_${instrumento}`
            
            tecla.classList.add('ativa');
            tocaSom(idAudio);
        }
        if (evento.key === '8'){
            tecla = listaTeclas[1];
            instrumento = tecla.classList[1];
            idAudio = `#som_${instrumento}`
            
            tecla.classList.add('ativa');
            tocaSom(idAudio);
        }
        if (evento.key === '9'){
            tecla = listaTeclas[2];
            instrumento = tecla.classList[1];
            idAudio = `#som_${instrumento}`
            
            tecla.classList.add('ativa');
            tocaSom(idAudio);
        }
        if (evento.key === '4'){
            tecla = listaTeclas[3];
            instrumento = tecla.classList[1];
            idAudio = `#som_${instrumento}`
            
            tecla.classList.add('ativa');
            tocaSom(idAudio);
        }
        if (evento.key === '5'){
            tecla = listaTeclas[4];
            instrumento = tecla.classList[1];
            idAudio = `#som_${instrumento}`
            
            tecla.classList.add('ativa');
            tocaSom(idAudio);
        }
        if (evento.key === '6'){
            tecla = listaTeclas[5];
            instrumento = tecla.classList[1];
            idAudio = `#som_${instrumento}`
            
            tecla.classList.add('ativa');
            tocaSom(idAudio);
        }
        if (evento.key === '1'){
            tecla = listaTeclas[6];
            instrumento = tecla.classList[1];
            idAudio = `#som_${instrumento}`
            
            tecla.classList.add('ativa');
            tocaSom(idAudio);
        }
        if (evento.key === '2'){
            tecla = listaTeclas[7];
            instrumento = tecla.classList[1];
            idAudio = `#som_${instrumento}`
            
            tecla.classList.add('ativa');
            tocaSom(idAudio);
        }
        if (evento.key === '3'){
            tecla = listaTeclas[8];
            instrumento = tecla.classList[1];
            idAudio = `#som_${instrumento}`
            
            tecla.classList.add('ativa');
            tocaSom(idAudio);
        }
    });

    // Adiciona o escutador de eventos de teclas despressionadas
    document.addEventListener('keyup', function(evento){
        if (evento.key === '7'){
            tecla = listaTeclas[0];
            
            tecla.classList.remove('ativa');
        }
        if (evento.key === '8'){
            tecla = listaTeclas[1];
            
            tecla.classList.remove('ativa');
        }
        if (evento.key === '9'){
            tecla = listaTeclas[2];
            
            tecla.classList.remove('ativa');
        }
        if (evento.key === '4'){
            tecla = listaTeclas[3];
            
            tecla.classList.remove('ativa');
        }
        if (evento.key === '5'){
            tecla = listaTeclas[4];
            
            tecla.classList.remove('ativa');
        }
        if (evento.key === '6'){
            tecla = listaTeclas[5];
            
            tecla.classList.remove('ativa');
        }
        if (evento.key === '1'){
            tecla = listaTeclas[6];
            
            tecla.classList.remove('ativa');
        }
        if (evento.key === '2'){
            tecla = listaTeclas[7];
            
            tecla.classList.remove('ativa');
        }
        if (evento.key === '3'){
            tecla = listaTeclas[8];
            
            tecla.classList.remove('ativa');
        }
    });
}

// Quando colocado sem parênteses, a função é somente armazenada na propriedade 'onclick' do elemento,
// evitando desta ser executada ao iniciar o script.
const listaTeclas = document.querySelectorAll('.tecla'); 

let i=0;

while(i < listaTeclas.length){
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`

    listaTeclas[i].onclick = function () {
        tocaSom(idAudio);
    }

    // Quando uma tecla do teclado estiver sendo pressionada, no caso as teclas de espaço e enter
    tecla.onkeydown = function (evento) {
        console.log(evento.code);
        if (evento.code === "Space" || evento.key === "Enter"){     // Operador "===" compara valor e tipo das variáveis
            tecla.classList.add('ativa');
        }
    }

    // Quando uma tecla do teclado for soltada
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    i++;
}

tocaComTecladoNumerico();