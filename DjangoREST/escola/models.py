from django.db import models

class Aluno(models.Model):
    nome = models.CharField(max_length=30)
    rg = models.CharField(max_length=9)
    cpf = models.CharField(max_length=11)
    data_nascimento = models.DateField()

    # Representação em String do objeto
    def __str__(self):
        return self.nome
    
class Curso(models.Model):
    # Representação de um tipo de um valor ('Simbolo','O que significa o simbolo')
    NIVEL = (
        ('B', 'Básico'),
        ('I', 'Intermediário'),
        ('A', 'Avançado')
    )

        # Representação em String do objeto
    def __str__(self):
        return self.descricao

    codigo_curso = models.CharField(max_length=10)
    descricao =  models.CharField(max_length=100)
    nivel = models.CharField(max_length=1, choices=NIVEL, blank=False, null=False, default='B')     # O formulário deste atributo não pode ser vazaio e nem pode possuir campo nulo no BD


class Matricula(models.Model):
    PERIODO = (
        ('M', 'Matutino'),
        ('V', 'Vespertino'),
        ('N', 'Noturno')
    )

    aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    periodo = models.CharField(max_length=1, choices=PERIODO, blank=False, null=False, default='M')