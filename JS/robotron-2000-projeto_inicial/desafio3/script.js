const botoesControle = document.querySelectorAll(".botao-controle");
const listaTintas = document.querySelector(".lista");


botoesControle.forEach( (elemento) => {
    elemento.addEventListener('click', () => {
        if (elemento.getAttribute('data-funcao') === "abrir-catalogo") {
            listaTintas.setAttribute("status", "visivel");
        } else {
            listaTintas.setAttribute("status", "oculto");
        }
    })
})

function mostraTintas(elemento) {
    if (elemento.getAttribute('data-funcao') === "abrir-catalogo") {
        document.querySelector('.lista').style.display = 'block';
        document.querySelector('[data-funcao="fechar-catalogo"]').style.display = 'block';
        elemento.style.display = 'none';
    } else {
        document.querySelector('.lista').style.display = 'none';
        document.querySelector('[data-funcao="abrir-catalogo"]').style.display = 'block';
        elemento.style.display = 'none';
    }
}