from django.contrib import admin

from galeria.models import Fotografia


class ListandoObjetos(admin.ModelAdmin):
    list_display = ("id", "nome", "legenda")    # Colunas dos objetos da model que são mostradas 
    list_display_links = ("id", "nome")         # Colunas dos objetos da model que, ao clicar, levarão ao registro do item
    search_fields = ("nome",)                   # Adiciona possibilidade de pesquisar registros por uma ou mais colunas (precisa ter vírgula no final caso seja somente um argumento, pois é uma tupla)

admin.site.register(Fotografia, ListandoObjetos)
