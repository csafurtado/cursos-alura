from django.http import JsonResponse
from rest_framework import viewsets
from escola.models import Aluno, Curso
from escola.serializer import AlunoSerializer, CursoSerializer


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


# OBS: Estas classes não são views por si só, elas precisam ser chamadas pelas views para serem usadas

# def alunos(request):
#     if request.method == 'GET':
        

#         return JsonResponse(aluno)

