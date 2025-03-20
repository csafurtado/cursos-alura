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

<h2>Java: trabalhando com listas e coleções de dados</h2>

- Podemos usar o **var** como definidor de tipo em uma variável, o Java irá inferir o tipo do objeto.

- A mais comum estrutura de dados é o _ArrayList_. Isso seria uma classe que implementa uma lista e que tem seus próprios métodos e atributos. O ArrayList no Java só aceita objetos, não tipos primitivos como int, double, char, etc.

- Arrays != ArrayList, pois apesar dos _arrays_ serem estruturas de dados para armazenar itens, eles possuem tamanho fixo e previamente determinado e não possuem método para manipulação de seus elementos. Recomenda-se então usar o ArrayList mesmo.

- Sempre olhar o JavaDoc de uma classe ou método em caso de dúvida. Esta é do <a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html">ArrayList</a> 

- Toda classe criada no Java irá herdar de `java.lang.Object`, com isso, toda classe possui uma série de métodos que Object tem.

- Toda classe tem um construtor padrão, onde todos os seus atributos são setados como _null_. É possível e recomendado de criar explicitamente um construtor com argumentos que já definirão os valores do atributo de um objeto. Vários construtores diferentes podem ser criados, inclusive um "vazio". Caso seja definido um construtor em uma classe, seus filhos precisam **obrigatoriamente** utilizar dele através do `super(argumento1, argumento2)`, com os argumentos definidos naquele construtor criado.

- É possível reduzir o tamanho do ForEach utilizando expressões _lambda_. Um exemplo seria: `nomes.forEach(nome -> System.out.println(nome));` em que "nome" seroa cada item dentro da lista "nomes" e o que está após a 'seta' será o corpo do que será feito no for.

- No Java, toda variável de objeto é na verdade uma referência a esse objeto que foi alocado na memória. Caso fosse usado um comparador de "==" em variáveis de objetos, mesmo que ambos fossem objetos da mesma classe e com as mesmas informações, o resultado seria **False**, pois são diferentes objetos alocados em diferentes regiões de memória.

- A classe `Collections` é usada para ordenar coleções de dados ou listas. A sua função estática (disponível sem precisar instanciar a classe) _sort()_ permite a ordenação do conjunto. Por padrão, o sort() não ordena objetos, A NÃO SER que estes implementem a interface `Comparable`, em que estes irão definir a forma como seus objetos devem ser "organizados". Para implementá-la em uma classe, é cessário utilizar `Comparable<ClasseTal>` para que a função à ser implementada (compareTo()) seja de objetos do mesmo tipo da classe em questão. A assinatira do método seria `public int compareTo(ClasseTal objeto)`

- Comparator != Comparable, pois um define se a Classe é comparável e outro é um filtro que pode ser aplicado ao sort() de uma lista. O Comparator é usado dentro da função _sort()_ de uma lista, onde irá se referenciar o método (um getAlgo()) do qual irá ser usado como filtro para ordenar a lista. Um exemplo é `listaTal.sort(Comparator.comparing(ClasseTal::getAtributoTal))`. O ponto duplo referencia um método de uma classe.

- Existem outras classes que implementam a interface List, elas podem ser vistas também na <a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html">documentação da interface List</a>, mas as principais são:
    - **ArrayList:**
        - **O que é:** Uma implementação de lista que usa um array dinâmico para armazenar os elementos.
        - **Para que é usado:** Ideal para cenários onde o acesso aleatório aos elementos é frequente, pois oferece desempenho constante para operações de acesso (`get`, `set`).
        - **Vantagens:**
            - Acesso rápido aos elementos por índice.
            - Bom desempenho para iteração.
        - **Desvantagens:**
            - Inserções e remoções no meio da lista podem ser lentas, pois exigem deslocamento de elementos.
            - Redimensionamento do array pode ser custoso em termos de desempenho.
    - **LinkedList:**
        - **O que é:** Uma implementação de lista que usa uma lista duplamente ligada para armazenar os elementos.
        - **Para que é usado:** Adequado para cenários onde inserções e remoções frequentes ocorrem no início ou no meio da lista.
        - **Vantagens:**
            - Inserções e remoções eficientes em qualquer posição da lista.
            - Implementa também a interface `Deque`, permitindo uso como fila ou pilha.
        - **Desvantagens:**
            - Acesso aleatório aos elementos é lento, pois exige percorrer a lista a partir do início ou do fim.
            - Maior consumo de memória devido aos ponteiros para os elementos anterior e seguinte.
    - **Vector:**
        - **O que é:** Semelhante ao `ArrayList`, mas sincronizado (thread-safe).
        - **Para que é usado:** Usado em ambientes multithreaded onde a sincronização é necessária.
        - **Vantagens:**
            - Thread-safe, evitando problemas de concorrência.
        - **Desvantagens:**
            - Desempenho inferior ao `ArrayList` em ambientes single-threaded devido à sincronização.
            - Considerada uma classe legado, o ArrayList é geralmente preferível, caso a necessidade de sincronização seja necessária, pode-se utilizar o método: Collections.synchronizedList(new ArrayList<>());
    - **Stack:**
        - **O que é:** Uma implementação de pilha (LIFO - Last In, First Out) que estende `Vector`.
        - **Para que é usado:** Adequado para cenários onde é necessário seguir a ordem LIFO, como em algoritmos de busca em profundidade ou em gerenciamento de histórico.
        - **Vantagens:**
            - Implementa o comportamento de pilha de forma direta.
            - Thread-safe devido à herança de `Vector`.
        - **Desvantagens:**
            - Desempenho inferior ao `ArrayDeque` (preferível para pilhas) em ambientes single-threaded.
            - Sendo um Vector, também é considerado uma classe legado, o ArrayDeque é preferível.

- O **Map** é uma interface que permite que os desenvolvedores associem chaves a valores. O **HashMap** é uma classe que implementa a interface Map usando uma __tabela hash__ para armazenar os pares chave-valor. Ele é conhecido por sua eficiência em termos de tempo de execução. Essa classe tem uma complexidade de tempo O(1) - constante - para inserção, recuperação e remoção de elementos. Isso significa que o desempenho do HashMap não depende do tamanho da coleção de dados! Porém não é garante a ordenação dos itens nem no input e nem na saida justamente por conta da função hash.