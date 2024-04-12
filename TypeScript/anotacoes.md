<h2>TypeScript na prática: implemente um projeto completo com TypeScript e módulos</h2>

* Todo dado que vem do form vem em string (campo.value)

* O JavaScript permite que outros elementos sejam adicionados dentro de um Object qualquer e também não avisa sobre erros em somas, por exemplo de '2' + 2. Também o JS não sabe quais atributos um elemento tem de fato, forçando o dev a colocar a propriedade manualmente. Agora com o TypeScript (TS), já se é possível verificar essa situação.

* Basicamente o TypeScript é uma maneira de escrever JS de maneira mais estruturada.

* Quando se há um 'errorcrumb' (migalha de erro) dizendo que um elemento pode ser nulo mas se tem a certeza de que ele não é, pode-se colocar assim na declaração dele:

```ts
const elemento = documento.querySelector(".classe_elemento_ou_tag") as HTMLElement;
const elementoInput = documento.querySelector(".classe_elemento_ou_tag") as HTMLInputElement;
const elementoSelect = documento.querySelector(".classe_elemento_ou_tag") as HTMLSelectElement;
// (...)
```
* Quando há um erro de 'Cannot redeclare block-scoped variable 'elementoTal'.', pode ser que em algum outro lugar do código ou até mesmo em outro arquivo do projeto esta variável está sendo declarada novamente.

* O navegador não reconhece arquivos .ts, somente .js, então para realizar essa conversão se utiliza o comando ```tsc arquivo_typescript.ts``` no terminal. (para baixar o pacote, usar o comando `npm install -g typescript`)