const robotron = document.querySelector(".robo");

function dizOi(nome) {
    alert(`Olá Humano ${nome}.`);
}

// robotron.addEventListener("click", dizOiDeclarado);
robotron.addEventListener("click", (evento_ocorrido) => {
    // DizOi com função anônima
    // alert("Olá Humano.");
    dizOi("Cristian");
    console.log(evento_ocorrido);
});

// robotron.addEventListener("click", alert("Olá Humano."));