<h2>Java: criando a sua primeira aplicação</h2>

- JRE: Java Runtime Environment: Ambiente que executa os arquivos já compilados pelo java

- JVM: Java Virtual Machine: Interpretador do Código Bytecode gerado pelo compilador Java que fica dentro do JRE

- O padrão de nomes utilizado é o _camelCase_.

- `++variavel` incrementa o valor dela antes de ser usada em uma função enquanto `variavel++` não.

- Para valores numéricos, é necessário fazer casting apenas em tipos maiores que o atual, o contrário é feito implicitamente

- A Classe `Scanner` é responsável por ler dados de entrada de diferentes fontes, seja de arquivos ou do próprio teclado mesmo. o `System.in` significa leitura do teclado do usuário

<h2>Java: aplicando a Orientação a Objetos</h2>

- Em `ClasseTal objeto = new ClasseTal();`, é alocado um espaço na memória para a criação de um objeto da _ClasseTal_, onde a variável _objeto_ aponta para este novo espaço de memória

- Toda classe precisa ter um **Construtor**, ou seja, uma função que realiza a criação da classe em memória (objeto)

- Se não tiver getters() ou setters() em uma classe, o modificador de acesso definido é o **default**, onde apenas classes do mesmo pacote da ClasseTal podem acessar seus atributos através do `objetoTal.atributo`.

- Os getters e setters modificam a forma como os dados são devolvidos e como eles são modificados.

- Os modificadores de acesso são: **public** em que qualquer classe pode acessar/usar os métodos, **private** em que somente a própria classe pode acessar/usar os métodos, **default** onde apenas as classes do mesmo pacote podem acessar/usar os métodos e **protected** em que somente os filhos/pais da classe e do mesmo pacote podem acessar os métodos.

- Os nomes dos pacotes em Java seguem um padrão: se em um site é "meusite.com.br" (domínio da empresa) o nome do pacote seria **br.com.meusite.nomeprojeto.nomepacote**.

- A palavra reservada `extends` é utilizada pra designar a qual classe uma outra classe herda.

- A _annotation_ `@Override` é utilizada na **sobrescrita** de métodos. As anotações, também conhecidas como annotations, são uma forma de adicionar configurações ao código Java de uma maneira bem simples. Elas são usadas para fornecer informações adicionais sobre o código, como o significado de uma classe, um método ou um atributo.

- O polimorfismo é uma coisa ter diferentes formas. No caso de uma classe Pai para classe Filho, há uma **especialização**, agora da classe Filho para Pai há uma **generalização**.

- As interfaces em Java são um contrato que define um conjunto de métodos que uma classe deve implementar, permitindo a criação de comportamentos comuns entre classes diferentes. Elas servem para promover a abstração e a flexibilidade no código, permitindo que diferentes classes implementem os mesmos métodos de maneiras distintas. Para implementar uma interface, uma classe deve usar a palavra-chave `implements` seguida pelo nome da interface e, em seguida, fornecer a implementação dos métodos definidos na interface. Por exemplo, ao implementar a interface Classificavel, uma classe deve definir o `método getClassificacao()`.

- Numa interface todos os métodos são públicos, não sendo então necessário utilizar a palavra reservada public na declaração deles. Variáveis declaradas em interfaces são consideradas como **constantes**, dado que não podem ser alteradas.

- **<a href="https://docs.oracle.com/en/java/javase/21/docs/api/index.html">DOCUMENTAÇÃO OFICIAL JAVA 21</a>**
