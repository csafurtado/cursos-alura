function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
    return "çuçeço";
}
// Quando colocado sem parênteses, a função é somente armazenada na propriedade 'onclick' do elemento,
// evitando desta ser executada ao iniciar o script.
document.querySelector('.tecla_pom').onclick = tocaSomPom; 