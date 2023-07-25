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

    i++;
}