from django.contrib import admin
from clientes.models import Cliente

class Clientes(admin.ModelAdmin):
    list_display = ('id', 'nome', 'email','cpf', 'rg', 'celular', 'ativo')
    list_display_links = ('id', 'nome')
    search_fields = ('nome', 'cpf',)
    list_filter = ('ativo',)
    list_editable = ('ativo',)
    list_per_page = 25
    ordering = ('nome',)    # Ordena os registros desta tabela por nome

admin.site.register(Cliente, Clientes)

