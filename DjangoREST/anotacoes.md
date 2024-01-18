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

* PUT e o PATCH são métodos HTTP utilizados para se atualizar algum recurso da API, contudo, o PUT serve para se fazer uma atualização completa de um recurso e o PATCH somente para um subconjunto dentro do recurso.

* A questão de _models_ que possuem chaves estrangeiras para outras irá funcionar da mesma forma que no Django normal, lembrando sempre de serializá-lo, criar seu ViewSet e adicionar a rota para o recurso como é feito normalmente neste framework com REST.

* Como posso saber, em um cenário de escola, quais cursos um aluno está matriculado? Ou até quais são os alunos cadastrados em um curso específico? Para isso será necessário seguir os seguintes passos:

    1. Criar um novo serializador para esse fim (de listar as matrículas de um aluno ou de listar os alunos de um curso), com base no modelo desejado a se exibir (ou as matrículas do aluno ou os cursos)

    ```py
    # serializer.py
    class ListaMatriculasAlunoSerializer(serializers.ModelSerializer):
        class Meta:
            model = Matricula
            fields = ['curso', 'periodo']
    ```

    2. Criar uma classe nova no `views.py`, porém, esta não será uma _viewset_, mas sim uma **ListAPIView**. Para isso sua implementação ficará:

    ```py
    # views.py
    from rest_framework import viewsets, generics

    class ListaMatriculasAluno(generics.ListAPIView):
    """Listando as matrículas de um aluno"""

    def get_queryset(self):     # Sobrescreve esta função para poder coletar a informação que se deseja
        return Matricula.objects.filter(aluno_id=self.kwargs['pk'])
    
    serializer_class = ListaMatriculasAlunoSerializer
    ```

    3. Adicionar uma rota nova com o id do objeto a se tirar informações, no caso de aluno (dos cursos dos quais ele está cadastrado)
    ```py
    # urls.py em setup
    from escola.views import AlunosViewSet, CursosViewSet, MatriculasViewSet, ListaMatriculasAluno

    # Cadastra um roteador do DjangoREST para cadastrar as rotas da API
    # (Funcionará como um urls.py, mas do DjangoREST)
    router = routers.DefaultRouter()
    router.register('alunos', AlunosViewSet, basename='Alunos') # Nome da rota, classeViewSet responsável e nome padrão para identificação
    router.register('cursos', CursosViewSet, basename='Cursos')
    router.register('matriculas', MatriculasViewSet, basename='Matriculas')

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include(router.urls)), # Inclui as rotas registradas nesse roteador em sua base, já que haverá ramificações da rota
        path('alunos/<int:pk>/matriculas/', ListaMatriculasAluno.as_view()), # É necessário ter o nome 'pk' para poder ser coletada em outra parte do programa e também como a classe ListaMatriculas não é um viewset, se utiliza esta função
    ]

    ```
    4. Caso se deseje formatar melhor os dados apresentados através do serializador, siga estes passos:

    ```py


    # Serializador responsável somente para listar as matrículas de um aluno
    class ListaMatriculasAlunoSerializer(serializers.ModelSerializer):
        curso = serializers.ReadOnlyField(source='curso.descricao')    # Campo em que será somente possível leitura, coletando o campo de descrição do modelo de Curso
        periodo = serializers.SerializerMethodField()   # Campo do qual irá coletar o valor em uma função get_<nome_da_variavel>(), no caso aqui, get_periodo()

        # Não faço a minima ideia ainda do porque que tem uma outra função como retorno que nem declarei
        def get_periodo(self, obj):
            return obj.get_periodo_display()

        class Meta:
            model = Matricula
            fields = ['curso', 'periodo']
    ```

* Para colocar uma camada de autenticação para outros sistemas utilizarem dos dados da API criada, podemos optar pelas classes já disponibilizadas pelo próprio framework, como a _BasicAuthentication_ por exemplo. Para isso, extendendo dos exemplos anteriores, fazemos:

```py
    # views.py do app_tal

    # Outros imports (...)
    from rest_framework.authentication import BasicAuthentication  # Disponibiliza uma interface básica de autencicação do tipo usuário e senha
    from rest_framework.permissions import IsAuthenticated # Faz a verificação se o sistema que realiza a solicitação está autenticado


    # Classes que lidarão as interações com as APIs de cada model automaticamente,
    # agrupando todas as operações (listagem, cadastro, exclusão, atualização) em uma única classe  
    class AlunosViewSet(viewsets.ModelViewSet):
        """Exibindo todos os alunos cadastrados"""

        queryset = Aluno.objects.all()      # Qual será a query que será executada ao chamar a classe
        serializer_class = AlunoSerializer  # Qual será o serializador responsável para traduzir os dados
        authentication_classes = [BasicAuthentication]
        permission_classes = [IsAuthenticated]

    # Adicionar estas novas duas linhas para as demais views(...)
```

* OBS.: Para realizar uma requisição sem utilizar navegadores (Insomnia, POSTman, etc), é necessário entrar na aba de autorização e escolher o tipo 'Basic Auth', que é o utilizado aqui neste exemplo. Nos navegadores, aparece um pop-up para que os dados de autorização sejam preenchidos


<h2>API com Django 3: Validações, buscas, filtros e deploy</h2>

* É possível adicionar validações para cadastro de novas informações numa API através das restrições de um atributo da própria Model, onde o serializador desta já irá carregar consigo, porém, o mais ideal é colocar as validações desejadas através da criação de uma função chamada _validate\_<atributo_da_model>(self, atributo\_da\_model)_. Exemplo:

```py
# model.py
from django.db import models

class ModelEx1(models.Model):
    nome = models.CharField(max_length=100, unique=True)
    email = models.EmailField(blank=False, max_length=30)

    def __str__(self):
        return self.nome

# serializers.py
from rest_framework import serializers
from exemplos.models import ModelEx1

class ModelEx1Serializer(serializers.ModelSerializer):
    class Meta:
        model = ModelEx1
        fields = '__all__'
    
    # Validação para nome, não permitindo ser menor que 2 digitos
    def validate_nome(self, nome):
        if len(nome) < 2:
            raise serializers.ValidationError("O nome é curto demais! Somente serão aceitos nomes com mais de 2 caracteres.")
        
        return nome
```

* Porém, o melhor é separar um arquivo em si em que irá ficar todas as validações desejadas, podendo ser chamado de _validators.py_. Com isso, podemos tirar todas as funções _validate\_<atributo_da_model>(self, atributo\_da\_model)_ e iremos trocar para apenas _validate(self, data)_ na serializers.py. Utilizando do exemplo anterior, ficará assim:

```py
# validators.py
# não tem imports nem nada

def nome_valido(cpf):
    return len(nome)

    # outras validações se quiser

# serializer.py
from rest_framework import serializers
from exemplos.models import ModelEx1
from exemplos.validators import *

class ModelEx1Serializer(serializers.ModelSerializer):
    class Meta:
        model = ModelEx1
        fields = '__all__'
    
    # O data irá se referir ao objeto de dados do Modelo
    def validate(self, data):
        if nome_valido(data['nome']) < 2:
            raise serializers.ValidationError({'nome':"O nome é curto demais! Somente serão aceitos nomes com mais de 2 caracteres."}) # Um dicionário com o 'campo':'mensagem_de_erro'
        
        # outras validações

        return data

```

* Uma forma bem comum e muito utilizada de se validar strings é usando <a href="https://www.alura.com.br/artigos/principais-casos-uso-regex-para-tratamento-dados">regex</a>, ou _expressões regulares_ que nada mais são que expressões que definem um certo padrão para uma string.

* Uma forma de validar documentos brasileiros (como CPF) sem ter que fazer na mão, é utilizar a lib `validate_docbr`. Basta instalá-la pelo `pip install` e usufruir dela.

* A biblioteca <a href="https://faker.readthedocs.io/en/master/">Faker</a> serve para gerar dados falsos e aleatórios para testar códigos.

* Não é muito comum ter uma rota de uma API que entregue todos os seus conteúdos de uma vez só, principalmente se há muitos deles. O que se recomenda é fazer uma paginação, ou seja, mostrar até X contéudos no máximo por vez, separando em páginas. Para fazer isso no DjangoREST, precisamos:
    1. Colocar no `setting.py` o seguinte trecho de código:
    ```py
    # (...)

    REST_FRAMEWORK = {
        # 'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination', # Para paginação por Offset
        'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination', # Para paginação por número de páginas
        'PAGE_SIZE': 10, 
    }

    # (...)
    ```