<h1>Formação Django</h1>

<h2>Django: templates e boas práticas</h2>

* Django é um framework orientado a **conteúdo**.

* É baseado na arquitetura MVT (baseado no MVC)

* É o framework perfeito para aplicações fullstack (Front e Back-End no mesmo lugar, arquitetura monolítica talvez?)

* Comando oara ver comandos do django ```django-admin help```

* Pode ser iniciado com a _virtualenv_, uma lib de python feita especialmente para criar ambientes virtuais. Ela se destaca da venv (que é nativa já do python e é uma parte menor da virtualenv) pelos fatos:
    * Possui maior velocidade
    * Pode criar ambientes virtuais independente da versão do Python instalada na máquina
    * Pode ser atualizado pelo pip
    * Possui uma Programmatic API, capaz de descrever um ambiente virtual sem criá-lo.

* Boa prática para iniciar um projeto Django é chamá-lo de _setup_ e colocar um ponto depois, apra não criar o nome do projeto de setup e uma pasta setup dentro dele:
```python
django-admin startproject setup .
```


