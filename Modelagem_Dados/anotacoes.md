<h1>Modelagem de Dados</h1>

<h2>Entidades, relacionamentos e atributos Modelagem de banco de dados: entidades, relacionamentos e atributos</h2>

* A entrevista é essencial para se construir um projeto de BD coerente com a necessidade do cliente. Antes porém, o responsável pelo projeto deve entender o contexto da situação, para que as perguntas relativas à construção do sistema sejam pertinentes e essenciais ao projeto.

* MER -> Modelo Entidade-Relacionamento (Conceitual): usado para descrever objetos, suas características e como se relacionam

* DER -> Diagrama Entidade-Relacionamento (Lógico): representação gráfica do MER, geralmente usado como sinônimo do MER

* Entidade: objeto, abstrato ou não, único no mundo real. Ex: Clientes, Carros, Departamento...
	* FORTE: Existe independentemente de outra entidade
	* FRACA: Precisa de outra entidade para existir

* Fluxo para definição de cardinalidade pode variar a ordem: Entidade -> relacionamento -> cardinalidade, Entidade -> cardinalidade -> relacionamento

* Tipos de restrições de relacionamentos entre entidades:
    * **Restrição total:** Ocorre quando todas as instâncias de uma entidade X precisam estar obrigatoriamente relacionadas a alguma instância da entidade Y. Exemplo sendo que um colaborador, para trabalhar numa empresa, deve estar associado a algum departamento. (relacionamento 'associar')

    * **Restrição parcial:** Ocorre o contrário da restrição total, em que uma entidade X não precisa estar obrigatóriamente associada a outra Y. No mesmo exemplo anterior, um empregado deve sim estar associado a um departamento, e todo departamento deve ter um empregado como gerente. Logo, somente um empregado deve ser gerente, não todos. (relacionamento 'gerencia')

* Todo relacionamento muitos-para-muitos pode ser entendido como uma entidade. Essas entidades denominam-se associativas, pois elas representam um fato, um relacionamento muitos-para-muitos.

* Todo relacionamento com uma entidade fraca é um relacionamento fraco.

* Atributos são características de uma entidade. Se algo não houver características, muito provavelmente este é um atributo de uma outra entidade.

* Os atributos:
    * Devem ser **atômicos**, ou seja, devem representar apenas um **aspecto** da entidade
    * Podem agrupar mais de um valor por vez (multivalorados)
    * Podem ser derivados, ou seja, podem ser descobertos a partir de outros atributos/informações
    * Podem ser obrigatórios (Not NULL) ou não
    * Podem ser chaves primárias (identificadores de itens da própria) e chaves estrangeiras (identificadores de outras entidades).

* Somente entidades fortes possuem chaves primárias. A chave primária se refere a um ou mais campos cujos valores, considerando a combinação de valores em caso de mais de um campo, nunca se repetem na mesma tabela.

* Quando uma entidade forte não tiver inicialmente um atributo do qual pode ser utilizado como chave primária, pode-se criar um para servir (com o nome 'id' por exemplo). Geralmente acontece em casos na qual a entidade forte em questão possui generalizações, ou seja, entidades que derivam desta e que cada uma possui um possível identificador próprio. 

* Caso uma entidade fraca poder possuir um atributo identificador (candidado a ser primário), este será uma _chave parcial_. Este será o identificador para a entidade em questão, porém deverá ser acompanhado da chave primária da entidade forte da qual ela tem relacionamento.

* <a href="https://www.alura.com.br/artigos/mer-e-der-funcoes">Site sobre MER e DER</a>

<h2>Modelagem de banco de dados relacional: modelagem lógica e física</h2>