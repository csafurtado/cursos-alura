<h1>Formação JS</h1>

<h2>JavaScript para Web: Crie páginas dinâmicas</h2>

* JS que é escrito dentro de uma tag é chamado de _inline_. Não é encorajado a sua utilização.

* É convenção utilizar o nome "main" para o arquivo .js principal.

* O HTML é chamado linha por linha, e não tudo de uma vez, logo, deve-se ter cuidado aonde colocar um script ou algo do tipo, primordialmente pensando em ser logo antes do fechamento de \<body>.

* Os navegadores possuem uma política em que bloqueiam a execução de mídias quando a página acaba de carregar, antes do usuário interagir com a página.

* Para selecionar um elemento que tenha um atributo sem ser class (exemplo de um input com type button), usa-se:
```js
document.querySelector('input[type=button]')
```

* **const** \<nome_var>: Define uma variável \<nome_var> como constante.

* Ao colocar parênteses de uma função quando ela aparece no código (fora de sua definição), ela é chamada imediatamente. Isso pode causar alguns comportamentos inesperados no site e até exceções. Para evitar isso, pode-se criar _funções anônimas_.

* A diferença entre criar uma função anônima para um evento e colocar uma função direto no evento é que a função anônima irá executar o que está dentro dela quando o evento ocorrer, enquanto que se fizer diretamente, o retorno da função em questão será retornado para a variável .onclick, .onkey, etc, sem que a função em questão seja executada.

```js
let i=0
while (i < listaTeclas.length) {
    // Isso fará com que o som fosse tocado ao carregar a página, caso não houvesse a excessão do DOM
    listaTeclas[i].onclick = tocaSom(id); 

    // Isso fará que seja criado uma função anônima, mas não na hora
    listaTeclas[i].onclick = function () {
        tocaSom(id);
    }
}
```

* É possível utilizar variáveis dentro de uma string em JS. Ao invés de usar aspas simples ou duplas como normalmente é feito, é utilizado _crase_. Com isso, é possível passar o valor de uma variável dentro da string.

```js
idAudio = `#som_${variavel}` // Chama-se template string
```

* elemento_botão:active é uma _pseudoclasse_, na qual representa o estilo quando o botão está sendo pressionado.

* Para saber qual tecla foi pressionada durante um evento, pode-se pagar os atributos 'code' ou 'key' dentro do evento através do console do navegador (DevTools)

```js
teste.onclick = function (evento) {
    console.log(evento.code, evento.key);
}
```

<h2>JavaScript: manipulando o DOM</h2>

* O JavaScript interage no documento HTML através do DOM (Document Object Model) que é um objeto JavaScript manipulável.

* É uma convenção utilizar uma pasta chamada 'js' no projeto onde conterá os scripts JS da aplicação. Também deve-se evitar fazer funções inline (JS dentro da tag HTML).

* É ideal colocar o script na última linha antes do \<\body>, assim permitindo que a página toda carregue sem que o script seja executado primeiro.

* Para se fazer um elemento HTML escutar um evento, adiciona-se o método .addEventListener("evento_desejado", funcao_declarada_desejada).

* OBS: Se colocar funcao_tal com parênteses, a função é executada somente uma vez, pois seria considerado um trecho de código ao invés do chamamento da própria função quando o evento acontece! Da mesma forma com uma função anônima function () {} sem o chamamento de uma função já existente.

```js
const elemento = document.querySelector("#elemento");

function teste() {
    alert('teste');
}

// Consegue executar a cada vez que o evento click (ou qq outro) acontece
elemento.addEventListener("click", teste);

elemento.addEventListener("click", function () {
    teste();
});

elemento.addEventListener("click", function () {
    alert('teste');
});

elemento.addEventListener("click", () => {  // Maneira mais atualizada de expressar funções anônimas, mas é a msm coisa
    alert('teste');
});

// Não consegue executar a cada vez que o evento click (ou qq outro) acontece
elemento.addEventListener("click", teste());

elemento.addEventListener("click", function () {
    teste;
});

```

* É possível verificar as propriedades do próprio evento que ocorreu dentro do elemento, basta colocar um argumento dentro das aspas da função anônima, este indicará o evento que ocorreu. Geralmente é dado o nome de 'e' ou 'event' mesmo, mas pode ser qq nome.

```js
elemento.addEventListener("click", (evento_ocorrido) => {  // Maneira mais atualizada de expressar funções anônimas, mas é a msm coisa
    alert('teste');
    console.log(evento_ocorrido);
});
```

* O _Hoisting_ (ou içamento em inglês) é uma ação feita pelo JS que consiste em mover declarações de funções e variáveis para o começo do código antes dele ser executado de fato, mesmo estas tendo sido declaradas anteriormente. Serão movidas para o topo as variáveis declaradas com a palavra-chave let, mas não as inicializa como as variáveis declaradas com a palavra chave var. Exemplo:

```js
// Forma como foi escrito
let x=20, y=10;

let result = add(x,y);
console.log(result);

function add(a,b){
    return a+b;
}

// Forma como seria executado
function add(a,b){
    return a+b;
}

let x=20, y=10;

let result = add(x,y);
console.log(result);
```

