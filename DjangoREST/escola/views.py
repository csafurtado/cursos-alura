from django.http import JsonResponse
from rest_framework import viewsets, generics
from escola.models import Aluno, Curso, Matricula
from escola.serializer import AlunoSerializer, CursoSerializer, MatriculaSerializer, ListaMatriculasAlunoSerializer, ListaAlunosCursoSerializer
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

class CursosViewSet(viewsets.ModelViewSet):
    """Exibindo todos os cursos cadastrados"""

    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]


class MatriculasViewSet(viewsets.ModelViewSet):
    """Exibindo todos as matriculas cadastradas"""

    queryset = Matricula.objects.all()
    serializer_class = MatriculaSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]

# View diferente para listar as matrículas de um aluno, servindo apenas para listar informações, e não para modificar
class ListaMatriculasAluno(generics.ListAPIView):
    """Listando as matrículas de um aluno"""

    # Sobrescreve esta função para poder coletar a informação que se deseja
    def get_queryset(self):     
        return Matricula.objects.filter(aluno_id=self.kwargs['pk']) # O self.kwargs é nada mais que os argumentos da url que chama esta view, lembrando que 'aluno' aqui é uma FK 
    
    serializer_class = ListaMatriculasAlunoSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]

# View diferente para listar as matrículas de um aluno, servindo apenas para listar informações, e não para modificar
class ListaAlunosCurso(generics.ListAPIView):
    """Listando os alunos matriculados em um curso"""

    # Sobrescreve esta função para poder coletar a informação que se deseja
    def get_queryset(self):     
        return Matricula.objects.filter(curso_id=self.kwargs['pk']) # O self.kwargs é nada mais que os argumentos da url que chama esta view, lembrando que 'curso' aqui é uma FK 
    
    serializer_class = ListaAlunosCursoSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]

# OBS: Estas classes não são views por si só, elas precisam ser chamadas pelas views para serem usadas

# def alunos(request):
#     if request.method == 'GET':
        

#         return JsonResponse(aluno)

