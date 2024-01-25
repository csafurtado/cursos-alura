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

* É ideal colocar o script na última linha antes do \<\body>, assim permitindo que a página toda carregue sem que o script seja executado primeiro. Pode-se também colocar a tag <\script src="pasta/arq.js" defer> dentro do head. O atributo __defer__, (que significa adiar) faz com que o script seja carregado após o carregamento do documento HTML.

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

* Para converter valores string em int, basta fazer **parseInt('string')**.

* Para iterar sobre todos os itens de uma lista (Array), pode-se usar a função **forEach((elemento) => {})**:

```js
var lista = [1,2,3,4,5,6,7];

lista.forEach( (elemento) => {
    console.log(elemento);
    }
)
// Serve como um for mais enxuto
```

* Para iterar sobre os itens de uma lista mas modificá-los, pode-se usar uma função parecida ao forEach(), o **map(item => o_que_vc_quiser_fazer)**:

```js
var lista = [1,2,3,4,5,6,7];

novaLista = lista.map(elemento =>
    // console.log(elemento)    // Ao se colocar console.log(), todos os itens da nova lista (ou mesma lista refatorada) terão seus elementos undefined, mesmo o console.log() tendo sido executado para cada elemento
    elemento + 2                // Não pode ter ';' no final da instrução do map()
)

console.log(novaLista)

// A diferença do map() pro forEach() é que map() aceita somente uma instrução, enquanto o forEach() funciona como um for, aceitando mais comandos dentro de si para serem executados. Também o map() retorna uma lista.
```

* Para retirar um ou mais elementos de uma lista, pode-se usar o **splice(indice_item, qtd_itens_a_retirar)**
```js
var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

lista.splice(1,1)

console.log(lista);
// lista agora é ["Laranja", "Branco", "Amarelo", "Rosa"];

```

* Para fazer com o o querySelector() encontre elementos com um atributo extra (exemplo,\<p cor='azul'>Texto\</p>) podemos colocar em seu argumento document.querySelector('[cor="azul"]'), pois aí ele pega a primeira tag que tiver esse atributo no documento ou elemento em questão. Se quiser colocar sem valor, apenas o atributo em si, também é válido! (exemplo, \<h1 tituloAleatorio>Titulo aleatório\</h1>)

* Ainda é possível manipular um elemento utilizando o CSS, o HTML e o JS juntos! Utilizando da ideia do tópico passado, também podemos passar para o CSS um estilo para elementos que tenham o atributo e valor dentro de si:

```html
<h1 tituloAleatorio>Titulo aleatório</h1>

<button class="botao__muda-cor">Muda Cor</button>
<p id="texto">Texto</p>
```

```css
[cor="azul"] {
    color: blue;
    font-size: 20px;
}

[cor="vermelho"] {
    color: red;
    font-size: 12px;
}

[cor="padrao"] {
    color: black;
    font-size: 25px;
}
```

```js
const botaoMudaCor = document.querySelector(".botao__muda-cor");
const tituloAleatorio = document.querySelector("[tituloAleatorio]");
const texto = document.querySelector("#texto");

console.log(tituloAleatorio);

// Adiociona o evento de click ao botão
// A cada clique no botão, o <p> muda de cor e tamanho, depois reinicia e vai fazendo de novo
botaoMudaCor.addEventListener('click', () => {
    if (!(texto.getAttribute('cor'))) {
        texto.setAttribute('cor', 'azul');
    } else if (texto.getAttribute('cor') === "azul"){
        texto.setAttribute('cor', 'vermelho');
    } else if (texto.getAttribute('cor') === "vermelho"){
        texto.setAttribute('cor', 'padrao');
    } else {
        texto.removeAttribute('cor');
    }
});
```
* Recomenda-se que todos os arquivos de mídia que serão utilizados na página sejam carregados junto com ela ao invés de depois, pois caso um destes arquivos seja pesado, irá prejudicar a experiência do usuário.

* Para funções que não retornam nada, é preferível se utilizar o _const_, já que seria um 'valor' que não muda. Porém, se houver algum retorno, é preferível se utilizar o _function_ mesmo. Contudo, se esta função _const_ for utilizada em outro lugar, precisa-se escrever DEPOIS dela para que seja visível para as demais funções, já que seria como a declaração de 'variável' normal.

```js
// Função que 'retorna' uma constante
const constagemRegressiva = () => {     // Função anônima
    tempoDecorridoEmSegundos -= 1;
    console.log('Temporizador: ' + tempoDecorridoEmSegundos);
}

// Função que retorna um valor
function constagemRegressiva() {
    tempoDecorridoEmSegundos -= 1;
    return tempoDecorridoEmSegundos;
}

// Função qq que usa a contagem
function seiLaMano() {
    constagemRegressiva;
}
```

* Podemos realizar uma função dentro de um intervalo determinado através do _setInterval(\<função_desejada>, \<tempo em ms>)._ Esta irá executar a função a cada período de tempo passado. O retorno desta função é um número que representa o ID de execução da função, identificando-a para que seja possível pará-la depois com o _clearInterval(\<ID_da_função_de_setInterval>)._, transformando o ID de execução da função em _null_.

```js
var contador = 5;
var ID_funcao = setInterval(funcaoTal, 1000);   // Inicia contador e execução da função

function funcaoTal(){
    if (contador > 0){
        console.log('olá mundo');
        contador -= 1;
    } else {
        clearInterval(ID_funcao);   // Para a execução do contador
    }
}
```

* É possível acessar o pai, filhos e irmãos "mais velhos" ou "mais novos" de um elemento HTML através de:
    * _elemento.parentNode_: elemento PAI
    * _elemento.childNodes_: lista com os elementos FILHOS
    * _elemento.nextElementSibling_: elemento logo após o atual ainda dentro do elemento PAI (IRMÃO MAIS NOVO)
    *_elemento.previousElementSibling_: elemento logo antes o atual ainda dentro do elemento PAI (IRMÃO MAIS VELHO)

* Para se mexer com datas e tempo, e usado o objeto Date(tempoEmMilissigundos). Para poder fazer o tempo no formato de mm:ss, pode-se usar:

```js
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);    // Em milissegundo
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute:'2-digit', second:'2-digit'});
```

* É possível também coletar a partir de um objeto Date, seu ano, mês até os millisegundos. Também é possível de se criar um objeto Date() a partir de uma string de data já formatada no padrão 'yyyy-mm-dd' dentro do construtor.

```js
const dateString = "2023-08-03";
const formatoDeData = new Date(dateString);

const currentDate = new Date();

const ano = currentDate.getFullYear();  // Acessa o ano
const mês = currentDate.getMonth(); // Acessa o mês - Janeiro é 0, Fevereiro é 1, ..., Dezembro é 11
const dia = currentDate.getDate(); // Acessa o dia
const horas = currentDate.getHours(); // Acessa as horas 
const minutos = currentDate.getMinutes(); // Acessa os minutos
const segundos = currentDate.getSeconds(); // Acessa os segundos
const milissegundos = currentDate.getMilliseconds();  // Acessa os milissegundos 
```

<h2>JavaScript na Web: armazenando dados no navegador</h2>

* É possível salvar dados da página dentro do navegador através do _localStorage_. Para isso, usamos o localStorage como uma variável já existente no JS e com os seus métodos setItem('chave', 'valor') e getItem('chave') conseguimos respectivamente salvar e coletar esses dados.  Pode-se salvar até 5MB de dados no site, porém, pode-se expandir (apenas alguns navegadores tem suporte para isso).

* Existem outras formas de salvar dados da página no navegador, sendo algumas delas:
    * _localStorage_,
    * _cookies_: Assim como o localStorage, os cookies também armazenam de forma persistente dados da página, porém bem menos conteúdo (4KB apenas). Aqui, um arquivo é criado contendo informações mais sensíveis, como infos de acesso do usuário, localização de acesso, endereço de email do login, itens clicados do site e etc. Por isso que muitas empresas perguntam se podem usar cookies para coletar dados do site.
    * _sessionStorage_: Aqui, os dados não são salvos de forma persistente (:c), sendo redefinidos cada vez que o usuário fecha o navegador.

* JSON.parse(dado_em_json): JSON->dado         JSON.stringfy(variavel): dado->JSON

* O elemento HTML \<form> envia eventos relevantes para o navegador, dos quais se pode fazer um tratamento usando JS. Os principais deles são:
    * _submit_: Evento de quando o formulário é enviado (pressionado o botão de envio geralmente),
    * _input_: Evento de quando um campo de entrada (texto ou qualquer campo) é modificado, seja digitando, deletando ou colando texto,
    * _change_: Evento de quando o campo de entrada é alterado e o campo perde foco (funciona para campos do tipo radio e select),
    * _click_: Evento de clique no elemento em questão,
    * _select_: Evento de quando o usuário seleciona um trecho de texto dentro de um campo de entrada.

* <a href="https://cursos.alura.com.br/extra/alura-mais/dark-mode-um-projeto-em-html-css-c1369">Como colocar o Dark Mode em um projeto HTML/CSS</a>

<h2>JavaScript: validações e reconhecimento de voz</h2>

* A função que se utiliza para gerar números "aleatórios" em JS é a Math.random(), que retorna de \[0 a 1\[, excluindo o 1. Então para poder gerar números maiores, basta multiplicá-lo por um outro maior.

* É possível fazer com que o navegador leia um texto (Speech Syntesis) ou reconheça o que o usuário fala (Speech Recognition)! Isso é possível através do <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a> e <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API">mais detalhes dele</a>. Para utilizar as funcionalidades, começamos importando essa API para o código JS:

```js
// Define essa configuração globalmente para todo o código JS da página
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const reconhecimento = new SpeechRecognition();
reconhecimento.lang = 'pt-br';

// Inicia o reconhecimento de voz (ativa o microfone)
reconhecimento.start();
```

<h2>JavaScript: consumindo e tratando dados de uma API</h2>

* É possível utilizar o JavaScript fora do navegador através do Node.js (ou Node somente). O JavaScript é executado no navegador porque nele tem uma máquina virtual que compila esse código, logo, o Node é uma altenativa em que essa máquina virtual pode ser utilizada sem o navegador, permitindo então a criação de várias soluções de JS sem depender deste.

* No Node, podemos baixar um pacote chamado 'JSON Server' para simular uma API para nosso frontend, em que nele temos dados _mockados_, ou seja, m conteúdo inventado e utilizado apenas como um marcador de posição e testes. Para rodar o JSON Server de fato então, basta então (dentro do terminal do node) utilizar o comando `json-server  --watch <caminho_do_arquivo_JSON_para_mockagem>`. Para isso, é preciso liberar a execução de Scripts pelo Windows (caso esteja rodando por lá) através do comando `Set-ExecutionPolicy RemoteSigned`. Após o uso do JSON Server, é fortemente recomendado reinstaurar essa execução de scripts por conta de segurança com o comando `Set-ExecutionPolicy Restricted`.

* A função `fetch()` busca um recurso de uma url dado para ela dando como reposta (**Response**) um <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a>, que é um objeto JavaScript que lida com operações assíncronas (que não bloqueiam o fluxo principal de execução do programa). O _Promise_ resolvido (ou retornado com sucesso) poderá ser manipulado logo após através da função `then(resposta => {codigo a ser executado})`, senão, deve ser tratado com a função `catch()`. Um exemplo é:

```js

const urlAPIFake = 'localhost:3000/videos'

const testeAPI = fetch(urlAPIFake).then(
    resposta => {
        // Código que é executado quando se obtem uma resolução da Promessa gerada pelo fetch()
        console.log(resposta)  // Printa os dados da resposta da requisição
        return resposta     // Retorna a resposta da requisição do fetch (a promessa cumprida) que pode ser utilizada em outro then() se for o caso
    }
).catch()

```