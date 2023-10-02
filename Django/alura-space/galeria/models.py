from django.db import models

from datetime import datetime

from django.contrib.auth.models import User


class Fotografia(models.Model):
    # Define as opções de valores que a coluna de 'categorias' pode ter
    OPCOES_CATEGORIAS = [
        ("NEBULOSA", "Nebulosa"),   # (Valor_real, Valor_mostrado)
        ("ESTRELA", "Estrela"),
        ("GALÁXIA", "Galáxia"),
        ("PLANETA", "Planeta")
    ]

    nome = models.CharField(max_length=100, null=False, blank=False)
    legenda = models.CharField(max_length=150, null=False, blank=False)
    categoria = models.CharField(max_length=100, null=False, blank=False, choices=OPCOES_CATEGORIAS, default='')    # Precisa ter um default caso tenha o atributo choices
    descricao = models.TextField(null=False, blank=False)
    foto = models.ImageField(upload_to="fotos/%Y/%m/%d/", blank=True)
    publicada = models.BooleanField(default=False)
    data_fotografia = models.DateTimeField(default=datetime.now(), blank=False)
    usuario = models.ForeignKey(    # Cria relação de chave estrangeira com outra model (no caso aqui com User)
        to=User,
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name='user',        # Nome mais fácil para a chave
    )


    def __str__(self):
        return self.nome