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
# views.py do app 'app_atual'

# from django.shortcuts import render # Não se utilizará mais isso
from django.http import JsonResponse


def teste(request):
    if request.METHOD == 'GET':
        dado_teste = {'id':1, 'nome':'Teste Tal'}  # Dado que será enviado no formato JSON para o Cliente

        return JsonResponse(dado_teste)


# urls.py do setup
from django.contrib import admin
from django.urls import path
from app_atual.views import modelTal1View

urlpatterns = [
    path('admin/', admin.site.urls),
    path('modelTal1/', modelTal1View),
]

```

* SERIALIZADORES: São classes especializadas em traduzir informações que estão em um formato para outro. No caso do Django REST, os dados das models salvos no BD são traduzidas para outro formato universal (JSON, XML etc). Isso é feito para que outras aplicações com diferentes linguagens de programação possam usufruir dos dados esta aplicação Django. Tudo é feito pelo arquivo _serializer.py_ que será criado dentro do app respectivo, criando-se classes de serializadores para cada model da aplicação. É possível também restringir quais informações estarão presentes na serialização do dados através do campo _fields_ da classe **Meta**.

```python
# serializer.py
from rest_framework import serializers
from app_atual.models import ModelTal1, ModelTal2

class ModelTal1Serializer(serializers.ModelSerializer):
    class Meta:
        model = ModelTal1
        fields = ['id', 'campo1', 'campo2', 'campo3']
# ModelTal1 tem os campos: id, campo1, campo2, campo3 e campoSecreto, porém só as demais irão ser serializadas e enviadas

class ModelTal2Serializer(serializers.ModelSerializer):
    class Meta:
        model = ModelTal2
        fields = '__all__'
# Todos os campos da ModelTal2 serão serializados e enviados

```

* Definindo os serializadores, precisa-se agora de fato utilizá-los, e isso é feito através de _viewsets_, que são classes que abstraem as operações de CRUD para uma model, facilitando a interação do dev com os dados trabalhados. Serão estes _viewsets_ que irão ser chamados nas views ao invés da própria model em si.

```python
# views.py
from django.http import JsonResponse
from rest_framework import viewsets
from app_atual.models import ModelTal1, ModelTal2
from app_atual.serializer import ModelTal1Serializer, ModelTal2Serializer

# Classes que lidarão as interações com as APIs de cada model automaticamente,
# agrupando todas as operações (listagem, cadastro, exclusão, atualização) em uma única classe  
class ModelTal1ViewSet(viewsets.ModelViewSet):
    """Exibindo todos os ModelTal1 cadastrados"""

    queryset = ModelTal1.objects.all()      # Qual será a query que será executada ao chamar a classe
    serializer_class = ModelTal1Serializer  # Qual será o serializador responsável para traduzir os dados


class ModelTal2ViewSet(viewsets.ModelViewSet):
    """Exibindo todos os ModelTal2 cadastrados"""

    queryset = ModelTal2.objects.all()
    serializer_class = ModelTal2Serializer

# OBS: Estas classes não são views por si só, elas precisam ser chamadas pelas views para serem usadas



# urls.py de setup
from django.contrib import admin
from django.urls import path
from app_atual.views import ModelTal1ViewSet, ModelTal2ViewSet
from rest_framework import routers

# Cadastra um roteador do DjangoREST para cadastrar as rotas da API
# (Funcionará como um urls.py, mas do DjangoREST)
router = routers.DefaultRouter()
router.register('modelTal1', ModelTal1ViewSet, basename='ModelTal1') # Nome da rota, classeViewSet responsável e nome padrão para identificação
router.register('modelTal2', ModelTal2ViewSet, basename='ModelTal2')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)), # Inclui as rotas registradas nesse roteador em sua base, já que haverá ramificações da rota
]

# OBS.: Estas rotas irão retornar para NÓS uma interface para manipular os dados, mas para quem solicita estes dados, os mesmos reberão o JSON/XML destes dados

```

* Para testar a API fora da aplicação Django, pode-se utilizar programas como o PostMan e o Insomnia, onde é possível visualizar, cadastrar, remover e atualizar os dados da aplicação.

