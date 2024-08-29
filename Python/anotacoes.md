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

- 