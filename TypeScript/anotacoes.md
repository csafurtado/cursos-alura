<h2>Node.js e terminal: dominando o ambiente de desenvolvimento front-end</h2>

- Para executar arquivos .js no terminal usando node.js, basta utilizar `node <caminho_do_arquivo_js>`

- Para rodar o backend local com o **json-server**, utilizamos o comando `json-server --watch <caminho_arquivo_json>`.

- Para poder definir quais bibliotecas um projeto irá usar, é necessário ter um **package.json**, que é o que o Node.js irá utilizar para baixar as dependências dele. Para criá-lo, basta usar o comando 'npm init'. A partir daí, para adicionar bibliotecas ao projeto, basta utilizar o `npm init @<lib_tal>@<versao_especifica_se_tiver>`

- O comando `npx` permite executar pacotes do npm sem a necessidade de instalá-los globalmente no seu sistema. Por exemplo: `npx eslint <arquivo(s)_a_analisar>` fará com que o arquivo específico seja rodado com o pacote do **eslint**.

- Existem extensões no VSCode que podem fazer a execução do `npx` e de pacotes específicos (como o **eslint**) sem ter que utilizar o terminal

- Uma ferramenta interessante para se padronizar código é o **prettier**, já que o uso do **ES-Lint** é mais recomendado para se verificar erros de código

- A flag `--save-dev ou -D` serve para manter o pacote apenas para a plataforma de desenvolvimento (package.json no devDependencies) e a flag `--save-exact ou -E` serve para definir a versão exata a ser utilizada no código para qualquer pessoa que for trabalhar no código JS.

- A diferença entre pacotes globais (instalados com a flag `-g ou --global`) é que eles ficam disponíveis para uso em todos os projetos, mesmo não estando no package.json, porém, pode ser que a versão global instalada do pacote não seja compatível com algum projeto. Para executar o global, basta utilizar seu nome, mas para executar o pacote local, é necessário utilizar `npx <nome_do_pacote>`, dentro da pasta do projeto.

- Os números de uma versão de um pacote tem significado: `X.Y.Z`, onde **Z** é a versão com correção de bugs, **Y** é a versão menor, onde são acrescentadas novas funcionalidades e **Z** é a versão maior, onde se pode haver descontinuação de pacotes ou mudanças significativas dentro do pacote. Esse padrão se chama 'versionamento semântico'.

  - `^X.Y.Z`: significa que o projeto roda versões superiores a X.Y.Z de um pacote, não é recomendado utilizá-lo.

- Para facilitar a escrita para execução de comandos, pode-se adicionar o comando do terminal no `package.json` na chave de 'scripts'. Basta adicionar o nome do comando (como chave) a ser executado e o comando em si (como valor). Ex: `"teste-local":"json-server --watch arquivolocal.json`". Para executar então é só escrever `npm run <comando_do_scripts>`.

- É possível de utilizar pacotes JS através da importação de um script no html que remete a URL no qual se pode achar o .js do arquivo. Este sistema se chama CDN (Content Delivery Network) e disponibiliza o script do pacote de maneira mais ágil. Você pode consultar no site do **npm** se o pacote possue esse sistema.

- O pacote **Vite** ajuda no gerenciamento de dependências dentro de um projeto JavaScript. Ele pode criar um servidor Node.js local próprio, sem precisar utilizar extensões do VSCode por exemplo. Para o caso de pacotes importados por CDN, colocar na tag o atributo "type":  `<script src="url_arquivo.js" type="module"></script>`

- A versão de desenvolvimento não será a que estará em produção, então para fazer a versão de produção pelo Vite, utilizamos seu script (definido no package.json) "build". Ele criará uma pasta chamada 'dist', onde haverá código html, css e js otimizados para melhor performance no navegador em que ele esteja sendo executado. Para poder ver essa versão de produção, ou ter uma PRÉVIA, utliza-se o script "preview" do Vite.

- Gists são como pequenos repositórios do GitHub, mas com foco em compartilhar blocos de código. Pode ser utilizada para testar (mockagem) e praticar requisições GET de projetos.

- Pode-se definir variáves de ambiente de desenvolvimento e de produção através da criação de arquivos chamados '.env.development' para desenvolvimento e '.env.production' para produção. Contudo, é necessário realizar uma nova build (sem o --watch) para adicionar novas var_envs ao programa.




<h2>TypeScript na prática: implemente um projeto completo com TypeScript e módulos</h2>

- Todo dado que vem do form vem em string (campo.value)

- O JavaScript permite que outros elementos sejam adicionados dentro de um Object qualquer e também não avisa sobre erros em somas, por exemplo de '2' + 2. Também o JS não sabe quais atributos um elemento tem de fato, forçando o dev a colocar a propriedade manualmente. Agora com o TypeScript (TS), já se é possível verificar essa situação.

- Basicamente o TypeScript é uma maneira de escrever JS de maneira mais estruturada.

- Quando se há um 'errorcrumb' (migalha de erro) dizendo que um elemento pode ser nulo mas se tem a certeza de que ele não é, pode-se colocar assim na declaração dele:

```ts
const elemento = documento.querySelector(
  ".classe_elemento_ou_tag"
) as HTMLElement;
const elementoInput = documento.querySelector(
  ".classe_elemento_ou_tag"
) as HTMLInputElement;
const elementoSelect = documento.querySelector(
  ".classe_elemento_ou_tag"
) as HTMLSelectElement;
// (...)
```

- Quando há um erro de 'Cannot redeclare block-scoped variable 'elementoTal'.', pode ser que em algum outro lugar do código ou até mesmo em outro arquivo do projeto esta variável está sendo declarada novamente.

- O navegador não reconhece arquivos .ts, somente .js, então para realizar essa conversão se utiliza o comando `tsc arquivo_typescript.ts` no terminal. (para baixar o pacote, usar o comando `npm install -g typescript`)

- Usando TS, a arquitetura de pastas muda:

  - É criada uma pasta para arquivos usados na produção (chamada 'dist', onde ficarão os arquivos .js, .css, assets e os .htmls) e outra para o desenvolvimento (chamada 'src', onde ficarão os arquivos .ts)
  - É necessário criar um arquivo de configuração para arquivos .ts, chamado de tsconfig.json no mesmo nível das pastas 'dist' e 'src'.

- O pacote 'tsc' possue um watcher, ou seja, um observador de mudanças no código TS (pasta 'src') em que para cada alteração ele recompila o arquivo ou cria novos arquivos compilados se houver novos arquivos TS. Para ativá-lo, utilizar o comando `tsc -w`.

- Para que uma variável possa assumir outros tipos de valores durante a execução do programa, basta definí-la como tipo 'any', como por exemplo, `let variavel : any = "tipo texto"; variavel = 40`;

- O alias em TypeScript, ou Type Alias, é uma comparação mais próxima ao typedef em C. Ambos permitem criar um novo nome para um tipo existente, facilitando a reutilização e a legibilidade do código. Já a enumeração é mais parecida com a declaração de constantes em C, onde definimos um conjunto de valores fixos.

- Não é interessante deixar todo o código TS concentrado em apenas um arquivo .ts, então é fundamental criar outros arquivos .ts que tenham responsabilidades específicas para cada componente do projeto em si e importar cada um no HTML que for necessário. Também para cada tipo novo dentro do projeto (um objeto com type alias e enums) é ideal criar um arquivo .ts para eles.

- É interessante ter um arquivo .ts que irá ser responsável por formatar strings: o formatters.ts. Assim, é possível fazer reuso dessa formatação.

- Para organizar melhor o código, sabendo a origem das funções e variáveis utilizadas dentro do programa e também para permitir a criação de nomes de variáveis iguais dentro do ecossistema da aplicação e também evitando de escrever várias tags \<scripts> dentro do .html (pode até gerar erros de dependências dado que o HTML é processado de cima para baixo), nós utilizamos o conceito de importar 'módulos', como é em outras linguagens de programação

- Para isso, primeiro é necessário criar pastas dentro do 'src' para separar os arquivos .ts em componentes (components), enums e tipos(types), e também funções utilitárias (utils) etc. Então com isso, teremos que ter um arquivo .ts central que chame todos esses arquivos (geralmente com o nome 'main.ts' ou 'app.ts'). Com isso, no arquivo .html que irá chamar o .js desse main.ts, a tag de importação do script estará agora dessa forma:

```html
<script type="module" src="./js/main.js"></script>
```

- Após isso, deve-se importar dentro do main.ts os scripts .js (Sim, dentro do .ts deve ter os imports .js, lembre-se da compilação do .ts em seu .js respectivo)

- Para disponibilizar um tipo ou função de um arquivo .ts para outro, deve-se colocar `export` antes da definição da coisa no arquivo onde esta está e depois colocar `import { funcaoOuTipo } from "local/arquivo/origem.js"`

- Para lançar exceções em TS, podemos utilzar o comando: `throw new Error('Mensagem de erro')` e depois, para capturar o erro, utilizar o 'try' com 'catch' dentro do código que se deseja testar.

<h2>Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD</h2>

- O Angular é um framework frontend para criar aplicações de página única (SPAs). Ele possui:

  - Estrutura baseada em componentes
  - Coleção de bibliotecas integradas e conjunto de ferramentas

- Para instalar o Angular 14, é necessário:

  - Ter o Node.js na versão 14.15 (pode utilizar o nvm pra instalar essa versão, porém terá que instalar o ng de novo pra ele caso tenha instalado em outra versão do Node.js)
  - Utilizar o comando `npm install -g @angular/cli@14.0.0`
  - Em caso de dúvidas, este é o <a href="angular.io/cli">site da documentação do Angular</a>

- Para criar um novo projeto Angular, utilizar o comando `ng new <nome_do_projeto>`. Depois, escolher as opções desejadas (recomenda-se ter um arquivo para rotas e utilizar CSS como estilo)

- Sobre a estrutura de arquivos do projeto Angular:

  - _node_modules_: Onde estão instaladas as dependências do projeto, declaradas no _package.json_ (produção e desenvolvimento).
  - _angular.json_: Arquivo de configurações do projeto atual
  - _src_: Pasta com os arquivos de fato desenvolvidos no projeto
  - _src/environments_: Pasta com os arquivos que contém as variáveis de ambiente produção e dev.
  - _src/app:_ Primeiro e superior componente do projeto (padrão). Possui a estrutura que os componentes de um projeto Angular devem ter, que no caso são o HTML, o CSS, os TS de rota, do componente em si e de módulo, e o SPEC.TS (para testes unitários). Será dentro dessa pasta onde serão criados os componentes do projeto.

- Para gerar um novo componente no projeto, podemos utilizar o comando `ng generate component <nome_do_componente>` (ou apenas `ng g c <nome_do_componente>` para os mais íntimos). Para usar o componente dentro de seu .html, basta chamar pela tag `<app-nome-componente></app-nome-componente>` no arquivo .html da pasta suprema 'app'.

- Sempre que criamos um novo componente, devemos parar a aplicação no terminal com o atalho "Ctrl + C", criar o componente e logo em seguida inicializar novamente a aplicação com o comando ng serve. Esse procedimento evita futuros problemas.

- Para que o Angular consiga associar variáveis dentro do arquivo .ts para colocar como informação no arquivo .html do componente, é necessário colocar na propriedade da tag html desejada os _colchetes \[\]_, exemplo: `<input [value]="variavel_ts"></input>` ou `<input [value]="objeto.atributo"></input>`. Essa propriedade se chama _property binding_ ou _elo de propriedades_. Também é possível fazer estas assanociações com a propriedade de _interpolação_, onde se coloca \{\{ variavel \}\} ou \{\{ objeto_var.variavel \}\}. A diferença de uso de ambos é que o property binding é mais adequado para as propriedades de tags HTMLs, pois ela não converte o valor para string enquanto a interpolação faz a conversão do conteúdo dentro de si para string, ideal para colocar em valores onde se usam strings. Aqui a ação vem do código para o template.

- O Angular também tem uma propriedade para escutar eventos de uma tag html que se chama _event binding_. Para isso, é necessário colocar os parênteses e o nome do evento desejado: `<tag (evento)="funcao_desejada()"></tag>`. Então aqui a ação vem do template para o código.

- Diretivas do Angular são 'classes HTML especiais' colocadas dentro das tags HTML que podem modificar essa tag. Para utilizá-las, é necessário importá-las no `app.module.js`. A classe 'ngModel' por exemplo é ideal para ser utilizada em formulários pois ela substitue a propriedade 'value' de um \<input>, e o que o módulo a ser importado é o 'FormsModule':

```typescript
// No app.module.js
// (...)
import { FormsModule } from "@angular/forms"; // AQUI

@NgModule({
  declarations: [
    AppComponent,
    // (...)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // AQUI
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- Então, onde tem tal atributo do ts, o 'ngModel' irá trocar o valor dela dinâmicamente, do template para o TS e do TS para o template, pois a tag \[\] faz TS->template e a tag \(\) faz template->TS.

- Para colocar rotas dentro da aplicação Angular, é necessário utilizar a tag `<router-outlet>` no 'app.component.html'. Ele é uma diretiva do Angular responsável por carregar os elementos (componentes) dinamicamente. As rotas da aplicação serão colocadas no arquivo de rotas 'app-routing.module.ts' dentro da variável de lista chamada 'routes'. Exemplo:

```html
<!-- No app.component.html -->
<app-cabecalho></app-cabecalho>
<main>
  <router-outlet></router-outlet>
</main>
<app-rodape></app-rodape>
```

```typescript
// No app-routing.module.ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExemploUnoComponent } from "./componentes/exemplo-uno";
import { ExemploDosComponent } from "./componentes/exemplo-dos";

const routes: Routes = [
  {
    path: "",
    redirectTo: "rota-exemplo-uno",
    pathMatch: "full",
  },
  {
    path: "rota-exemplo-uno",
    component: ExemploUnoComponent,
  },
  {
    path: "rota-exemplo-dos",
    component: ExemploDosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

- Para que um elemento HTML (principalmente botões) direcionem para uma rota em específico, basta colocar a diretiva do Angular chamada 'routerLink' dentro do elementoHTML, por exemplo:`<button routerLink="/rota-a-se-direcionar">Botão redireciona</button>`

- Para se utilizar estruturas de repetição para repetir um elemento HTML na página, pode-se usar a diretiva do Angular '\*ngFor' numa div que engloba o elemento a ser repetido. Abaixo temos um exemplo do uso dessa diretiva:

```html
<!-- Dentro do .html do componente desejado a se ter a repetição -->
<div class="mural">
  <div *ngFor="let item of listaItems">
    <!-- Um for each usando a diretiva -->
    <app-componente-tal [variavel-componente-filho]="item"></app-componente-tal>
    <!-- Usa-se o component binding aqui para se enviar o 'item' para o componente filho -->
  </div>
</div>
```

```typescript
// No arquivo componente-tal.ts

// (...)

// Precisa-se colocar esse decorador no arquivo filho para que possa receber do pai o input e o formato que ele deve ter
@Input() variavel-componente-filho = {
  conteudo1: 'cont1',
  conteudo2: 'cont2',
  conteudo3: 'cont3',
}
// (...)
```

- A diretiva do Angular '\*ngIf' funciona como o if-else comum nas linguagens de programação. Para usá-lo (em conjunto com o else também), podemos utilizar do exemplo anterior:

```html
<div class="mural" *ngIf="listaItems.length > 0 else templateDoElse">
  <div *ngFor="let item of listaItems">
    <!-- Um for each usando a diretiva -->
    <app-componente-tal [variavel-componente-filho]="item"></app-componente-tal>
    <!-- Usa-se o component binding aqui para se enviar o 'item' para o componente filho -->
  </div>
</div>

<ng-template #templateDoElse>
  <!-- Usa-se # para definir o nome deste template para que este seja usado em outro lugar -->
  Não há itens para se mostrar!
</ng-template>
```

- A diretiva do Angular 'ngClass' aplica uma classe CSS a um elemento conforme uma função ou atributo do TS. Para usá-lo, basta colocá-lo dentro do elemento do qual se deseja aplicar uma classe.

- Mais informações sobre diretivas do Angular podem ser encontradas neste <a href="https://angular.io/guide/built-in-directives">site</a>.

- O JSON Server é uma biblioteca capaz de criar uma API fake para testes no frontend. Para configurá-lo em um projeto Angular, pode-se:

  - Criar uma pasta dentro do projeto chamada 'backend'.
  - Entrar nesta pasta e criar o arquivo 'package.json' através do comando `npm init -y`
  - Instalar o json-server com o comando npm i json-server
  - Criar um arquivo .json que representará o banco de dados, com os dados dentro dele devidamente formatados conforme a necessidade.
  - No 'package.json', na chave 'scripts' colocar uma entrada com `"start": json-server --watch db.json --port 3000`, que será o comando que será executado no terminal (como um makefile).
  - Ainda dentro da pasta 'backend', executar o comando: `npm start` para iniciar o servidor

- Para garantira formatação correta dos dados que trafegam para o backend, podemos nos utilizar de _interfaces_. Ela pode ser implementada dentro de um arquivo .ts qualquer seguindo este formato:

```typescript
export Interface ModeloInterface {    // Funciona de modo parecido com uma classe
  campo1 : string,
  campo2 : number,
  campo3 : float,
  campo4 : Date,
}

// Em um arquivo.ts do qual se use a interface
import { ModeloInterface } from 'caminho-arquivo.ts';

@Input() modelinho : ModeloInterface = {
  campo1 = '',
  campo2 = 0,
  campo3 = 0.0,
  campo4 = Date(),
}
```

- O Angular possui uma estruturação de responsabilidades para cada arquivo dentro de um componente sendo:

  - componente.ts : Define a lógica de dos comportamentos do componente em si e da sua renderização na tela.
  - service.ts: Define a lógica de negócios e a conversa com o backend (servidor), contendo todas as requisições para este. No caso, este será o arquivo onde terá o CRUD da aplicação.

- Para que o arquivo 'services.ts' seja criado, utiliza-se o comando `ng generate service <caminho_para_o_componente>` ou apenas `ng g s <caminho_para_o_componente>`. Ele terá este formato:

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // (Precisa ser colocado)

// Decorador que permite utilizar esta classe em outros componentes e classes pela injeção de dependências
@Injectable({
  providedIn: "root", // Essa classe de serviço pode ser usada em qualquer lugar da aplicação, pois é 'root'
})
export class ComponenteService {
  constructor(private http: HttpClient) {} // (Precisa ser colocado) Colocando o modificador de acesso private, fazemos com que esse atributo seja automaticamente declarado como atributo dessa classe.
}
```

- <a href="https://www.alura.com.br/artigos/services-injecao-dependencia-angular-o-que-sao-como-funcionam">Para saber mais sobre services.ts</a>

- Para se definir a API que será consumida pela aplicação frontend e os seus métodos CRUD, precisa-se colocar a URL desta colocando-a como um atributo da classe do serviço: `private readonly API = '<url_da_api>';`.

- Diferente do Router, a classe ActivatedRoute fornece informações sobre as rotas usadas (?)
