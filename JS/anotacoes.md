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