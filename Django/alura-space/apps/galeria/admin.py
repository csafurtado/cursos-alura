from django.contrib import admin

from apps.galeria.models import Fotografia


class ListandoObjetos(admin.ModelAdmin):
    list_display = ("id", "nome", "legenda","data_fotografia", "publicada")    # Colunas dos objetos da model que são mostradas 
    list_display_links = ("id", "nome")         # Colunas dos objetos da model que, ao clicar, levarão ao registro do item
    search_fields = ("nome",)                   # Adiciona possibilidade de pesquisar registros por uma ou mais colunas (precisa ter vírgula no final caso seja somente um argumento, pois é uma tupla)
    list_filter = ("categoria","usuario")                # Adiciona filtragem por lista como uma barra lateral
    list_per_page = 10                          # Adiciona paginação
    list_editable = ("publicada",)               # Permite editar essas colunas diretamente na lista dos objetos, sem precisar clicar nele

admin.site.register(Fotografia, ListandoObjetos)