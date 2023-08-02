function tocaSom(idAudio){
    document.querySelector(idAudio).play();
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

    // Quando uma tecla do teclado for soltada, no caso as teclas de espaço e enter
    tecla.onkeydown = function (evento) {
        if (evento.code === "Space" || evento.key === "Enter"){
            tecla.classList.remove('ativa');
        }
    }

    i++;
}