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

* O modelo padrão de posicionamento de elementos HTML é o *box position*.

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
    * <a href="https://www.alura.com.br/artigos/css-guia-do-flexbox?_gl=1*mwk7i3*_ga*MTQxODYwMjU3My4xNjg0NDQyMTc2*_ga_59FP0KYKSM*MTY5MDk4MTc2Ny4yMS4xLjE2OTA5ODM2NDguMC4wLjA.*_fplc*NTR5T3YlMkZCeXAwaFdHOHhzUGx2c3U2N29TMEw0Vm8lMkJtUUpUQ0lrV3BWMzVXaGRuOUFJRXJoVm0lMkIwYmJGemxmREE1TkZnZmt2R2slMkJ4ajg1MW0wNSUyQmtGMHZqNWNqNjZRRTl0TnpvSEpPUlVlbWpNc0g3U0FQRTdGak9yQ1RjUSUzRCUzRA..">Flexbox CSS: Guia Completo, Elementos e Exemplos</a>

* Para fazer espaçamento enter vários elementos de uma tag que tenha display flex, pode-se verificar a propriedade _gap_.

* 