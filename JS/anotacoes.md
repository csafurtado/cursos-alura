<h1>Formação JS</h1>

<h2>JavaScript para Web: Crie páginas dinâmicas</h2>

* JS que é escrito dentro de uma tag é chamado de _inline_. Não é encorajado a sua utilização.

* É convenção utilizar o nome "main" para o arquivo .js principal.

* A tag \<strong> é uma tag na qual define um elemento como algo que precisa de atenção, deixando o texto dentro dela em negrito.

* O HTML é chamado linha por linha, e não tudo de uma vez, logo, deve-se ter cuidado aonde colocar um script ou algo do tipo, primordialmente pensando em ser logo antes do fechamento de \<body>.

* Os navegadores possuem uma política em que bloqueiam a execução de mídias quando a página acaba de carregar, antes do usuário interagir com a página.

* Sites para escolha de paleta de cores:
    * Color Tool, Adobe Color, Color Hunt, Coolors...

* Existe uma técnica que chama 'reset CSS' que consiste em criar um arquivo .css que padronize a formatação de páginas HTML em diferentes navegadores através de um 'reset agressivo' da sua estilização. É uma boa prática em todo projeto web.

* O modelo padrão de posicionamento de elementos HTML é o *box position*.

* Fluxo para definição de cardinalidade pode variar a ordem: Entidade -> relacionamento -> cardinalidade, Entidade -> cardinalidade -> relacionamento

* Tipos de restrições de relacionamentos entre entidades:
    * **Restrição total:** Ocorre quando todas as instâncias de uma entidade X precisam estar obrigatoriamente relacionadas a alguma instância da entidade Y. Exemplo sendo que um colaborador, para trabalhar numa empresa, deve estar associado a algum departamento. (relacionamento 'associar')

    * **Restrição parcial:** Ocorre o contrário da restrição total, em que uma entidade X não precisa estar obrigatóriamente associada a outra Y. No mesmo exemplo anterior, um empregado deve sim estar associado a um departamento, e todo departamento deve ter um empregado como gerente. Logo, somente um empregado deve ser gerente, não todos. (relacionamento 'gerencia')

* Todo relacionamento muitos-para-muitos pode ser entendido como uma entidade. Essas entidades denominam-se associativas, pois elas representam um fato, um relacionamento muitos-para-muitos.

* Todo relacionamento com uma entidade fraca é um relacionamento fraco.



