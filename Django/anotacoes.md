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

* É possível mudar a referência da linguagem e timezone para o do Brasil, sendo LANGUAGE_CODE = 'pt-br' e TIME_ZONE = 'America/Sao Paulo'

* É fundamental criar variáveis de ambientes para presservar a segurança da aplicação

* Pode-se pegar templates já prontos de gitignore para um framework ou linguagem em gitignore.io

* Comando de ajuda do django:
```python
python manage.py help
```

* Comando para criar um novo app (adicionar o app depois em settings.py):
```python
python manage.py startapp <nome_do_app_novo>

# Em settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    '<nome_do_app_novo>',
]
```
* O nome 'index' se refere a página principal da aplicação

* **views.py**: É o arquivo que será responsável por conter funções que são invocadas ao acessar uma rota específica da aplicação para mostrar uma determinada página.

* **urls.py**: É o arquivo que será responsável por definir quais rotas existem dentro da aplicação e o que é retornado/ativado caso uma rota seja chamada no navegador. É uma excelente prática _isolar as URLS dos apps_. Para isso:
    * Pode ser criado em cada app o arquivo **urls.py**.
    * Usar o include('nome_do_app.urls') para incluir no urls.py base todas as rotas de nome_do_app. A função vem de django.urls

* Em **settings.py**, existe já uma configuração para templates. Nela você tem várias opções, uma delas é definir o diretório de onde elas estarão. Então é ideal criar uma pasta chamada _templates_ (como se fosse um app, ou seja, no nível da aplicação) e adicionar o se caminho no settings.py:
```python
# Em settings.py
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')], ## Aqui
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# Em views.py
def index(request):
    return render(request, 'index.html')
```

