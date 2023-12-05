<h1>Django REST</h1>

<h2>API com Django 3: Django Rest Framework</h2>

* API: Interface da Aplicação para Programação, onde são disponibilizadas funções do aplicação para quaisquer entidades ou outras API's externas (seja implementado em JAva, Node.js, Python etc) utilizarem, sem saber como estas funções são implementadas. As respostas virão em formatos de JSON ou XML ao invés de HTML, pois não há necessidade de renderizar uma página, mas sim, de coletar/receber algum dado.

* <a href="https://www.django-rest-framework.org/">Documentação do DjangoRESTFramework</a>

* Para iniciar a criação de uma API usando o DjangoRest, é necessário criar o projeto Django e instalar as bibliotecas do DjangoREST:

1. Criar o ambiente virtual e o projeto Django com as libs necesárias
```bash
# Criar o ambiente virtual
python -m venv venv

# Instalar as libs necessárias
pip install django
pip install djangorestframework
pip install markdown

# Criar o projeto Django
django-admin startproject setup .
```

2. Colocar no _settings.py_ do projeto o app da lib do djangorest que foi instalada

```python
# (...)

INSTALLED_APPS = [
    #(...),
    'rest_framework',
]
```

3. Começar a escrever as views (que serão retornos de dados ao invés de páginas)

```python
# views.py do app 'teste'

# from django.shortcuts import render # Não se utilizará mais isso
from django.http import JsonResponse


def teste(request):
    if request.METHOD == 'GET':
        dado_teste = {'id':1, 'nome':'Teste Tal'}  # Dado que será enviado no formato JSON para o Cliente

        return JsonResponse(dado_teste)


# urls.py
from django.contrib import admin
from django.urls import path
from teste.views import alunos

urlpatterns = [
    path('admin/', admin.site.urls),
    path('alunos/', alunos),
]

```

