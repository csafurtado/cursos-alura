from rest_framework import serializers
from escola.models import Aluno, Curso, Matricula


class AlunoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = ['id', 'nome', 'rg', 'cpf', 'data_nascimento']

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'

class MatriculaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Matricula
        exclude = [] # Exclui os campos que não se deseja serializar

# Serializador responsável somente para listar as matrículas de um aluno
class ListaMatriculasAlunoSerializer(serializers.ModelSerializer):
    curso = serializers.ReadOnlyField(source='curso.descricao')    # Campo em que será somente possível leitura
    periodo = serializers.SerializerMethodField()   # Campo do qual irá coletar o valor em uma função get_<nome_da_variavel>(), no caso aqui, get_periodo()

    # Não faço a minima ideia ainda do porque que tem uma outra função como retorno que nem declarei
    def get_periodo(self, obj):
        return obj.get_periodo_display()

    class Meta:
        model = Matricula
        fields = ['curso', 'periodo']

# Serializador responsável somente para listar os alunos matriculados em um curso
class ListaAlunosCursoSerializer(serializers.ModelSerializer):
    nome = serializers.ReadOnlyField(source='aluno.nome')    # Campo em que será somente possível leitura
    data_nascimento = serializers.ReadOnlyField(source='aluno.data_nascimento')   # Campo do qual irá coletar o valor em uma função get_<nome_da_variavel>(), no caso aqui, get_periodo()

    class Meta:
        model = Aluno
        fields = ['nome', 'data_nascimento']