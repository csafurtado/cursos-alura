"""setup URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.contrib import admin
from django.urls import path, include
from escola.views import AlunosViewSet, CursosViewSet, MatriculasViewSet, ListaMatriculasAluno, ListaAlunosCurso
from rest_framework import routers

# Cadastra um roteador do DjangoREST para cadastrar as rotas da API
# (Funcionará como um urls.py, mas do DjangoREST)
router = routers.DefaultRouter()
router.register('alunos', AlunosViewSet, basename='Alunos') # Nome da rota, classeViewSet responsável e nome padrão para identificação
router.register('cursos', CursosViewSet, basename='Cursos')
router.register('matriculas', MatriculasViewSet, basename='Matriculas')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)), # Inclui as rotas registradas nesse roteador em sua base, já que haverá ramificações da rota
    path('alunos/<int:pk>/matriculas/', ListaMatriculasAluno.as_view()), # É necessário ter o nome 'pk' para poder ser coletada em outra parte do programa
    path('cursos/<int:pk>/alunos/', ListaAlunosCurso.as_view()),
]
