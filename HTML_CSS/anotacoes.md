<h1>Formação HTML/CSS</h1>

<h2>HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags</h2>

* Colocar sempre o \<!DOCTYPE html> dentro dos arquivos .html, para evitar de serem renderizados no modo Quirk.

* Colocar também em \<img> o atributo "alt"

* \<meta name="viewport"> é uma tag que coloca a meta informação para definir a largura que será renderizada na página. Em computação gráfica, a viewport é a porção de área visível de um plano e é utilizada como unidade de medida no CSS para criar páginas Web 100% responsivas.

* \<button> pode ser utilizada para ações como envios de formulários, a tag \<a> não possui essa funcionalidade, já que seu papel é apenas redirecionar o usuário para diferentes urls.

* O CSS nasceu para estilizar elementos HTML de forma separada por um arquivo .css

* A tag \<strong> é uma tag na qual define um elemento como algo que precisa de atenção, deixando o texto dentro dela em negrito.

* Sites para escolha de paleta de cores:
    * Color Tool, Adobe Color, Color Hunt, Coolors...

* Existe uma técnica que chama 'reset CSS' que consiste em criar um arquivo .css que padronize a formatação de páginas HTML em diferentes navegadores através de um 'reset agressivo' da sua estilização. É uma boa prática em todo projeto web.

* Quando dizemos que uma tag é semântica, significa que ela possui um significado específico e claro em relação ao conteúdo que está sendo representado. O uso de tags semânticas não altera o processamento básico do documento HTML no navegador. O navegador ainda irá interpretar e renderizar o código HTML da mesma forma, independentemente do uso de tags semânticas. No entanto, o uso de tags semânticas traz benefícios em termos de organização, acessibilidade e SEO. Esses benefícios estão relacionados à interpretação e compreensão do conteúdo por parte de leitores de tela, motores de busca e desenvolvedores, mas não afetam diretamente o processamento do código HTML pelo navegador.

<h2>HTML e CSS: Classes, posicionamento e Flexbox</h2>

* O modelo padrão de posicionamento de elementos HTML é o *box position*.

* O _padding_ é responsável por definir a distância entre um conteúdo e suas bordas (espaçamento interno) enquanto o _margin_ define a distância ao redor do elemento em questão.

* Box-sizing é uma propriedade CSS para definir o comportamento de uma tag filha em relação ao seu elemento pai, por como a largura e a altura totais de um elemento filho são calculadas em relação ao seu elemento pai. 
    
* Não é uma boa prática definir tamanhos fixos para propriedades de estilos de elementos HTML.

* CSS-Tricks: site de documentação de posicionamento CSS.

* Para poder aplicar a propriedade de flexbox em um elemento, precisa-se observar o agrupamento dos elementos que se deseja organizar e verificar qual é o elemento que contém tais elementos, e assim, aplicar no elemento-pai a propriedade de flexbox.

* Ao definir o valor da propriedade display de um elemento como flex, criamos um contêiner flex, ou seja, passamos a utilizar o Flexbox. A partir desse ponto, todos os elementos que estão dentro do contêiner são chamados de elementos-filhos e apresentarão comportamentos padronizados.

* Quando é criado um elemento dentro de outro que tenha uma classe, é uma boa prática colocar o nome da classe pai dentro do nome que a classe filho terá.

* É possível importar fontes para textos HTML da internet, como por exemplo, a partir do Google Fonts. Para isso:
    * Procurar pela fonte no site e escolher qual tipo (italico, regular etc)

    * Importar a aplicação, podendo escolher a opção por importar para o CSS ou para o HTML. No caso do CSS, copiar apenas o que está dentro da tag \<style>.

    * Importa também o que será colocado na propriedade _font-family_, disponibilizado na própria página da fonte.

* As divs são usadas para separar conteúdo mais visual, não semântico, como em uma \<section> por exemplo.

* Documentação para ajudar na estilização do CSS:
    * <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">CSS Tricks</a>
    * <a href="https://www.alura.com.br/artigos/css-guia-do-flexbox">Flexbox CSS: Guia Completo, Elementos e Exemplos</a>

* Para fazer espaçamento enter vários elementos de uma tag que tenha display flex, pode-se verificar a propriedade _gap_.

<h2>HTML e CSS: cabeçalho, footer e variáveis CSS</h2>

* Ao inverter a direção do flexbox, as outras propriedades também modificam junto

* Dicas para comentários:
    * Evitar colocar muitos comentários;
    * Evitar comentários muito grandes, pois apesar de não serem lidos, deixam o arquivo do código mais pesado;
    * Anotar informações importantes neles, para que seja mais fácil lembrar do que o trecho faz;
    * Apagar comentários de teste quando for comittar as mudanças por exemplo;
    * Ao fazer um código mais significiativo (nomes de variáveis, classes e etc que representam o que elas fazem) a necessidade de comentários diminui;

* É padrão utilizar o nome **assets** para a pasta onde será colocados imagens e outras mídias 

* Alguns tipos da propriedade _justify-content_ do flexbox que controla o posicionamento dos elementos filhos ao longo do eixo principal e também ajuda a distribuir o espaço livre entre eles:
    * _space-around_: Com o valor space-around, os itens serão distribuídos cada um com um espaço ao seu redor.
    * _space-evenly_: Com o valor space-evenly, os itens são distribuídos com espaços iguais entre si e até as bordas. Como temos apenas 2 elementos, eles ficarão centralizados.
    * _center_: Com o valor center, os elementos serão centralizados em seu elemento pai, mas sem espaços entre si.

* O seletor <a src="https://www.w3schools.com/CSSref/sel_hover.php">hover</a> pode ser aplicado a classes também, não só a tags somente.

* A <a href="https://www.w3schools.com/TAgs/tag_nav.asp" >tag \<nav></a> é utilizada para representar uma seção de navegação em um documento web. É recomendado utilizar essa tag para agrupar os links de navegação do cabeçalho \<header>. Ela é uma tag semântica do HTML.

* Para se tratar de espaçamentos, é recomendado utilizar porcentagens, dado que a página pode ser carregada em dispositivos com telas de resoluções diferentes.

* É convenção utilizar uma pasta chamada _styles_ para colocar os códigos CSS.

* É possível que, ao criar novas páginas, seja necessário criar novos arquivos .css para definir os estilos de um conjunto ou de uma página em específico. É priorizado que se utilize o menor número de arquivos .css possível por questões de performance de processamento da página.

* Alguns atalhos do VSCode:
    ! : Completa um esqueletinho básico de um html
    elemento_html*n : Cria n elementos htmls de uma vez só

* É possível utilizar <a src="https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties">variáveis CSS</a> para evitar repetição de código e facilitar a manutenção de código. Para isso, utilizamos a <a href="">pseudoclasse</a> **root**, representada por :root dentro do arquivo .css. Ela representa o escopo global do arquivo, ou seja, tudo declarado dentro dela, pode ser utilizada dentro de qualquer outro elemento definido no css. A variável precisa ser declarada com um hífen duplo (--) no início, para que seja reconhecida como variável e não como propriedade CSS.

```css
:root {
    --cor-primaria: #000000;
    --cor-secundaria: #F6F6F6;
    --cor-terciaria: #22D4FD;
}


.elemento__uno {
    color: var(--cor-primaria);
}

.elemento__dos {
    background-color: var(--cor-secundaria);
}

```

* Ideias para projetos HTML/CSS:
    * Página de presente com fotos e textos fofos.
    * Página de lojas com itens ou produtos favoritos.
    * etc etc...

<h2>HTML e CSS: trabalhando com responsividade e publicação de projetos</h2>

* Existem 2 grandes <a href="https://www.alura.com.br/artigos/guia-de-unidades-no-css">grupos de medidas para elementos em HTML</a>:
    * **Absolutas:** Possuem tamanho fixo e próprio determinado na página de estilo (cm, mm, in, px, pt, pc)

    * **Relativas:** Possuem seu tamanho com base no tamanho de um outro elemento HTML, podendo mudar caso este outro elemento mude de tamanho. Estas são:
        * em: Relativo ao tamanho da fonte do elemento em questão (2em = 2*tamanho_da_fonte)
        * ex: Relativo ao tamanho x da fonte atual (não utilizado mais quase)
        * ch: Relativo à largura de "0" ou zero. (caracter zero)
        * rem: Relativo ao tamanho da fonte do elemento raiz, ou seja, o HTML (16px = 1rem)
        * vw: Relativo à 1% da largura do viewport (Viewport é o tamanho da janela do navegador atualmente)
        * vh: Relativo à 1% da altura do viewport
        * vmin: Relativo à 1% da menor dimensão do viewport
        * vmax: Relativo à 1% da maior dimensão do viewport
        * %: Relativo ao elemento pai

* É recomendado se utilizar medidas relativas, pois caso a página seja redimensionada ou esteja em um display com menor resolução, os elementos redimensionam junto com a página, tornando a página mais _responsiva_.

* <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/Media_Queries/Using_media_queries">Media Queries</a>: é uma técnica do CSS que permite aplicar estilos diferentes com base em condições de tamanho de tela, melhorando a responsividade seja para desktops, celulares ou tablets já que estes possuem resoluções diferentes.

```css
/* Aplica esse estilo quando está dentro das condições do parênteses */
@media (min-width:300px) and (max-width:600px) {
    /* Define mais ou redefine estilos para uma classe ou elemento HTML*/
    .classe_tal {
        background-color: blue;
        font-size: 20px;
        /* (...) */
    }

    /* (...) */
}
```

* <a href="https://www.alura.com.br/artigos/srcset-trabalhando-imagens-responsivas">Sobre a tag \<picture></a>, uma tag para se trabalhar com imagens em sites.

<h2>HTML e CSS: praticando HTML/CSS</h2>

* Sobre os Displays:
    1. <a src="https://blog.frontux.com/pare-de-chutar-e-aprenda-como-funciona-o-display-inline-4ccb7b77371d#.8tcy3rrhg">_inline_</a>
    2. <a src="https://blog.frontux.com/pare-de-chutar-e-aprenda-como-funciona-o-display-block-98480c987950#.ko7z123q5">_block_</a>
    3. <a src="https://medium.com/collabcode/pare-de-chutar-e-aprenda-como-funciona-o-display-inline-block-4e6cba2f19d4">_inline-block_</a>

* Há diferença entre a tag \<img> e a propriedade _background-image_ do CSS. A tag é utilizada para elementos de imagem que sejam relavantes para o usuário, pois até tem o atributo _alt_, que serve justamente para auxiliar no entendimento do que se trata a  imagem, ao contrário da propriedade, em que, se a página não carregar corretamente, não geraria um ônus para a leitura do site pelo usuário. Se fizer sentido para o usuário, você usa a tag img para colocar um texto alternativo. Se é uma questão só decorativa, você usa o background-image.

* Para se decidir qual usar entre \<a> e \<button>, devemos pensar em qual propósito este será utilizado. Se queremos ser redirecionados para uma outra página, então devemos priorizar o uso de \<a> que já tem o atributo deo _href_ para isso. Se queremos que alguma ação seja executada na página, não havendo necessidade de redirecionamento, utilizaremos um botão e adicionaremos um comportamento a ele.

* Existe uma nova forma ainda de definir o arranjo dos itens dentro de um elemento: atrvés do <a href="https://www.alura.com.br/artigos/criando-layouts-com-css-grid-layout">display: grid</a>. Com isso, é possível separar a área do elemento em uma grade de n x n elementos, podendo configurar a o tamanho de cada posição.

* Para alinhar elementos dentro de um outro elemento de display _grid_, usa-se a propriedade _align-items_. Todos os elementos ficarão alinhados dentro das colunas respectivas do grid em questão.

* É recomendado se utilizar flexbox ou grids ao invés de margins, paddings e top, right, etc etc para tentar centralizar elementos que não são textos evitando assim empecilhos na hora de se fazer um site responsivo.

* As <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes">pseudoclasses</a> são como propriedades de comportamento de estilo em um elemento HTML, usadas para especificar o estado que esse elemento está. Alguns desstes estados (pseudo-classes) são:
    * _:focus_ : é aplicada quando um elemento está em foco, pode ser pelo clique do mouse ou seleção pelo teclado. Um exemplo é quando os campos de escrita em formulários estão selecionados para o usuário escrever.
    * _:hover_ : detecta quando um usuário está com o mouse em cima do elemento, sem necessariamente estar clicando.
    * _:active_ : detecta quando o elemento está ativo, quando há uma interação, por exemplo: o link \<a> está sendo clicado.
    * _:visited_ : detecta quando o link \<a> já foi visitado, ou seja, se você já clicou anteriormente naquele link.
    * _:link_ : detecta quando é um link \<a> que nunca foi clicado antes.
    * _:root_ : Também é uma pseudo-classe, porém ela não é usada para definir estados de interatividade, pois ela especifica algo para todo o documento HTML, não só para um elemento em específico. Ela é mais comummente usada para se definir variáveis dentro do .css

    * Exemplo de uso:
    ```css
    .classe_elemento a {
        color: white;
    }

    /* Ao passar o mouse em cima de um <a class="classe_elemento">, a cor da fonte dele muda pra azul, sendo originalmente branca*/
    .classe_elemento a:hover {
        color : blue;
    }
    ```

* Para saber mais <a href="https://www.alura.com.br/artigos/como-colocar-projeto-no-ar-com-github-pages">GitHub Pages</a>

<h2>HTML e CSS: responsividade com mobile-first</h2>

* 