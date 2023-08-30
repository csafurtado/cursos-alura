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

* O Padding é responsável por definir a distância entre um conteúdo e suas bordas.

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