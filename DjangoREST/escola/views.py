from django.http import JsonResponse
from rest_framework import viewsets, generics
from escola.models import Aluno, Curso, Matricula
from escola.serializer import AlunoSerializer, CursoSerializer, MatriculaSerializer, ListaMatriculasAlunoSerializer


# Classes que lidarão as interações com as APIs de cada model automaticamente,
# agrupando todas as operações (listagem, cadastro, exclusão, atualização) em uma única classe  
class AlunosViewSet(viewsets.ModelViewSet):
    """Exibindo todos os alunos cadastrados"""

    queryset = Aluno.objects.all()      # Qual será a query que será executada ao chamar a classe
    serializer_class = AlunoSerializer  # Qual será o serializador responsável para traduzir os dados

class CursosViewSet(viewsets.ModelViewSet):
    """Exibindo todos os cursos cadastrados"""

    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

class MatriculasViewSet(viewsets.ModelViewSet):
    """Exibindo todos as matriculas cadastradas"""

    queryset = Matricula.objects.all()
    serializer_class = MatriculaSerializer

class ListaMatriculasAluno(generics.ListAPIView):
    """Listando as matrículas de um aluno"""

    def get_queryset(self):     # Sobrescreve esta função para poder coletar a informação que se deseja
        return Matricula.objects.filter(aluno_id=self.kwargs['pk'])
    
    serializer_class = ListaMatriculasAlunoSerializer

# OBS: Estas classes não são views por si só, elas precisam ser chamadas pelas views para serem usadas

# def alunos(request):
#     if request.method == 'GET':
        

#         return JsonResponse(aluno)

