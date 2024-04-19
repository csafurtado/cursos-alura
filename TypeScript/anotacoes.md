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

* Usando TS, a arquitetura de pastas muda:
    * É criada uma pasta para arquivos usados na produção (chamada 'dist', onde ficarão os arquivos .js, .css, assets e os .htmls) e outra para o desenvolvimento (chamada 'src', onde ficarão os arquivos .ts)
    * É necessário criar um arquivo de configuração para arquivos .ts, chamado de tsconfig.json no mesmo nível das pastas 'dist' e 'src'.

* O pacote 'tsc' possue um watcher, ou seja, um observador de mudanças no código TS (pasta 'src') em que para cada alteração ele recompila o arquivo ou cria novos arquivos compilados se houver novos arquivos TS. Para ativá-lo, utilizar o comando `tsc -w`.

* Para que uma variável possa assumir outros tipos de valores durante a execução do programa, basta definí-la como tipo 'any', como por exemplo, `let variavel : any = "tipo texto"; variavel = 40`;

* O alias em TypeScript, ou Type Alias, é uma comparação mais próxima ao typedef em C. Ambos permitem criar um novo nome para um tipo existente, facilitando a reutilização e a legibilidade do código. Já a enumeração é mais parecida com a declaração de constantes em C, onde definimos um conjunto de valores fixos.

* Não é interessante deixar todo o código TS concentrado em apenas um arquivo .ts, então é fundamental criar outros arquivos .ts que tenham responsabilidades específicas para cada componente do projeto em si e importar cada um no HTML que for necessário. Também para cada tipo novo dentro do projeto (um objeto com type alias e enums) é ideal criar um arquivo .ts para eles.

* É interessante ter um arquivo .ts que irá ser responsável por formatar strings: o formatters.ts. Assim, é possível fazer reuso dessa formatação.

* Para organizar melhor o código, sabendo a origem das funções e variáveis utilizadas dentro do programa e também para permitir a criação de nomes de variáveis iguais dentro do ecossistema da aplicação e também evitando de escrever várias tags \<scripts> dentro do .html (pode até gerar erros de dependências dado que o HTML é processado de cima para baixo), nós utilizamos o conceito de importar 'módulos', como é em outras linguagens de programação 

* Para isso, primeiro é necessário criar pastas dentro do 'src' para separar os arquivos .ts em componentes (components), enums e tipos(types), e também funções utilitárias (utils) etc. Então com isso, teremos que ter um arquivo .ts central que chame todos esses arquivos (geralmente com o nome 'main.ts' ou 'app.ts'). Com isso, no arquivo .html que irá chamar o .js desse main.ts, a tag de importação do script estará agora dessa forma: 
```html
<script type="module" src="./js/main.js"></script>
```

* Após isso, deve-se importar dentro do main.ts os scripts .js (Sim, dentro do .ts deve ter os imports .js, lembre-se da compilação do .ts em seu .js respectivo)

* Para disponibilizar um tipo ou função de um arquivo .ts para outro, deve-se colocar `export` antes da definição da coisa no arquivo onde esta está e depois colocar `import { funcaoOuTipo } from "local/arquivo/origem.js"`

* Para lançar exceções em TS, podemos utilzar o comando: `throw new Error('Mensagem de erro')` e depois, para capturar o erro, utilizar o 'try' com 'catch' dentro do código que se deseja testar.