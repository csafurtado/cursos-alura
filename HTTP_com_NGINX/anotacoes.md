<h1>Estudos em HTTP e Nginx</h1>

<h2>Linux Onboarding: usando a CLI de uma forma rápida e prática</h2>

* O gerenciador de pacotes do Linux (o apt) baixa os pacotes em REPOSITÓRIOS.

* A linha do shell é definida como <usuario>@<nome_do_host>:<diretorio_atual>$(se for usuário root, será '#')

* Para ver todos os comandos utilizados na sessão do shell, pode se usar o comando `history`.

* Existem 'caracteres curingas' (ou <a href="https://pt.linux-console.net/?p=17454">globbing</a>) que podem ser utilizados no shell para facilitar a busca e/ou manipulação de arquivos. Dentre eles temos:
    *  '*': Significa tudo/qualquer coisa que venha após o caracter antes dele, seja em qualquer quantidade ou nada logo após.
    *  '?': Significa tudo/qualquer coisa que venha após o caracter antes dele, mas limitado a um único caracter.
    *  '[X-Y]' : Significa que o caracter de tal posição só pode assumir valores de 'X' a 'Y'.
    *  '[X, Y, Z, ..., T]' : Significa que o caracter de tal posição só pode assumir os valores 'X', 'Y', 'Z', ou 'T'.

<h2>HTTP: entendendo a web por baixo dos panos</h2>

* O protocolo HTTP (HyperText Transfer Protocol) é um protocolo de comunicação utilizado entre duas entidades (um cliente e um servidor) para transferir dados pela Web. Dentro das camadas da web, este protocolo se encontra no nível de aplicação.

* O cliente é quem inicia a conversa no protocolo.

* O HTTP utiliza o protocolo de transporte de dados TCP (camada de transporte).

* Uma requisição HTTP é composta principalmente por um cabeçalho (header) e um corpo (body ou payload, que são as informações enviadas pela requisição, como um JSON por exemplo).

* A URL (Localizador de Recursos Universal) é um instrumento para se localizar recursos na Web (como o próprio nome diz). Ela é dividida por `<protocolo>://<servidor>:<porta_de_acesso>/<caminho_do_recurso_no_servidor>`. As URLs podem ser usadas por diferentes protocolos de comunicação. A porta padrão do HTTP é 80 e a da HTTPS é a 443.

* Uma URL é uma URI, mas nem todas as URI's são URL's! Existem URI's que identificam um recurso sem definir o endereço, nem o protocolo. Em outras palavras, uma URL representa uma identificação de um recurso (URI) através do endereço, mas nem todas as identificações são URL's.

* Todo computador deve ser acessado pelos seus IPs, contudo, seria um saco ficar lembrando esses números para cada site, então por isso foi criado o DNS (Sistema de Nomes de Domínios). O DNS basicamente traduz o ip do servidor para um nome de domínio mais simples e vice-versa. Para descobrir o ip de um domínio, pode se utilizar o comando no terminal `nslookup <dominio>`.

* O DNS é hierárquico e em formato de árvore, ou seja, os domínios são separados em domínios de nível superior ou TLS  (.com, .br, .org, ...) e em sub-domínios, que realmente seriam os nomes do sites. Ex: google.com -> subdomínio = google e o domínio superior = .com. Assim fica mais fácil de se administrar os zilhões de domínios existentes na internet.

* 