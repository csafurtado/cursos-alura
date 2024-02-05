<h1>Estudos em HTTP e Nginx</h1>

<h2>HTTP: entendendo a web por baixo dos panos</h2>

* O gerenciador de pacotes do Linux (o apt) baixa os pacotes em REPOSITÓRIOS.

* A linha do shell é definida como <usuario>@<nome_do_host>:<diretorio_atual>$(se for usuário root, será '#')

* Para ver todos os comandos utilizados na sessão do shell, pode se usar o comando `history`.

* Existem 'caracteres curingas' (ou <a href="https://pt.linux-console.net/?p=17454">globbing</a>) que podem ser utilizados no shell para facilitar a busca e/ou manipulação de arquivos. Dentre eles temos:
    *  '*': Significa tudo/qualquer coisa que venha após o caracter antes dele, seja em qualquer quantidade ou nada logo após.
    *  '?': Significa tudo/qualquer coisa que venha após o caracter antes dele, mas limitado a um único caracter.
    *  '[X-Y]' : Significa que o caracter de tal posição só pode assumir valores de 'X' a 'Y'.
    *  '[X, Y, Z, ..., T]' : Significa que o caracter de tal posição só pode assumir os valores 'X', 'Y', 'Z', ou 'T'.