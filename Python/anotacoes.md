<h1>Formação de Python orientado a objetos</h1>

<h2>Python: crie a sua primeira aplicação Python: crie a sua primeira aplicação</h2>

- <a href="https://docs.python.org/pt-br/3/">Documentação Python PT-BR</a> e <a href="https://www.alura.com.br/artigos/python">Artigo sobre a linguagem</a>

- É uma convenção utilizar _'snake-case'_ para nomes de variáveis e constantes em Python, mas PascalCase (letra maíuscula e junto) para nomes de classes

- Para manter a quebra de linha em uma string, pode-se usar _"""três aspas duplas"""_ ao inés de duplas. Busca priorizar-se _'aspas simples'_ para strings

- O Python agora tem o switch case! Pela instrução `match`:

```python

match expressao:
    case caso_1:
        instrucao1()
        # Não precisa do break nos casos
    case caso_2:
        instrucao2()
    case caso_3:
        instrucao3()
    case _: # Caso default
        instrucaodefault()
```

- As tuplas são estruturas de dados que nos permitem armazenar elementos de maneira ordenada e sequencial (acessível por índices), assim como as listas. Ao contrário das listas, tuplas são **imutáveis**. Uma vez que uma tupla é criada, seus elementos não podem ser alterados, adicionados ou removidos. Devido à sua imutabilidade, as tuplas têm um desempenho melhor do que listas para algumas operações. Elas são mais eficientes em termos de espaço e processamento em determinados cenários.

<h2>Python: aplicando a Orientação a Objetos</h2>

- Todas as classes em Python possuem classes comuns entre si. A função **vars('classe')** printa em formato de dicionário os atributos e valores da classe em questão. A função **dir('classe)** mostra todos os métodos e atributos dentro da classe em questão.

- Para criar o construtor de uma classe, devemos fazer:
```python

class ClasseTal:
    var_classe = 'X'

    def __init__(self, attr1, attr2):
        self.attr1 = "Atributo 1"
        self.attr2 = "Atributo 2"

    @classmethod
    def ver_var_classe(cls):
        return cls.var_classe

elemento1_tal = ClasseTal('atributo1','atributo2')
```

- Objetos podem ver variáveis de classe, mas não pode modificá-los, ficando restrito apenas à própria classe poder alterá-los. O decorador '@classmethod' é responsável por definir isto. O método então fica parecido com os relativos ao objeto, porém apontando para a classe em si.

- Para modificar o "print" de uma classe, pode-se sobrescrever a função **__str__()** dentro da definição da classe. Os métodos com dois underlines indicam métodos do próprio Python.

- A convenção para atributos privados em Python é iniciar o nome do atributo com um único underline, tipo '\_atributo'. Para modificar como um atributo desta classe é lido, pode-se usar o decorator `@property`. permitindo usar normalmente o _classe.atributo\_privado.


<h2>Python: avance na Orientação a Objetos e consuma API</h2>

- Para utilizar funções de uma classe pai, podemos utilizar o `super().metodo_da_classe_pai()`

- Para criar métodos abstratos, deve-se colocar a classe pai herdando da classe ABC (importar a classe de 'abc') e colocar o decorator @abstractmethod em cima da função que deverá ser implementada pelas classes filhas

- Polimorfismo é uma função ter diferentes comportamentos dependendo da classe em que está.

- Para fazer requisições, é possível utilizar a lib `requests` do Python.

```py

import requests

# Fazendo uma requisição GET
response = requests.get('https://www.alura.com.br/')

# Verificando o status code
print(response.status_code)

# Imprimindo o conteúdo da resposta
print(response.text)
```

- O FastAPI já gera uma documentação por automático da API criada, basta acessar a rota '/docs'. Para adicionar conteúdo à documentação de uma tal rota, pode-se usar aspas triplas logo em baixo da assinatura da função.

- 