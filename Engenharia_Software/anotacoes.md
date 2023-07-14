<h1>Engenharia de Software</h1>

<h2>Curso 1:</h2>

**RECOMENDAÇÃO DE LIVRO**: Domain-Driven Design - Eric Evans

* Arquitetura: Visão de mais alto nível da aplicação. Separação de camadas, pastas da aplicação.

* Design de código: Visão de mais baixo nível. Como escrever cada classe, quais padrões de projeto aplicar.
<br>

* **MVC**:
<img src="mvc_padrao.png">
<br><br>

* **Arquitetura Hexagonal (Ports and Adapters):**
    <img src="hexagonal_arquitetura.png">

    * Arquitetura que envolve isolar a regra de negócio em um domínio de tudo o que não faz parte diretamente dele, se comunicando com o domínio através de PORTAS. Cada porta tratará a entrada de forma diferente. Também existirão portas diferentes para quando o domínio queira se comunicar com outro componente da aplicação.
<br><br>

* **Arquitetura Limpa:**
    <img src="clean_arquitetura.png">
    
    * Entidades: Classes que possuem uma identidade que a torna única. Classes onde existem as regras de negócio.

    * Casos de Uso/Serviço da aplicação: Classes que organizam o fluxo da regra de negócios para diferentes formas de acesso à aplicação.

    * Controllers: Camada que serve para adaptar ferramentas externas permitindo a comunicar com a interface dos casos de uso.

    * Dispositivos externos: Camada onde não serão aplicadas regras de negócios. Onde ficam dispositivos que comunicam com a plicação principal.
<br><br>

* **Design orientada a domínios (DDD - Domain Driven Design):**

    * Filosofia de desenvolvimento na qual é priorizado o desenvolvimento com base das regras de negócio desejadas. É pegar a realidade do negócio e colocar no código.

    * Padrões estratégicos: 
        * Linguagem Ubíqua (onipresente): dar nome igual em todas as etapas do projeto (ex.: Aluno ter a Classe Aluno).

        * Contextos delimitados: Tipos de usos diferentes de uma plataformas.

        * Domínio principal e subdomínios: Domínio mais importante da aplicação e o que não é tão relevante.

        *...

    * Padrões táticos (blocos de construção):
        * Entidades
        * Repositórios (persistência dos dados)
        * Eventos
        * Módulos
        * Serviços (classe que representa uma AÇÃO)
        *...
    <br>
    * Arquitetura em camadas:
    <img src="camadas_arquitetura.png">

    -- parou em "O que é mensageria?"" --
    