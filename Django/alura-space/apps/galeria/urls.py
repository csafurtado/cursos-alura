from django.urls import path
from apps.galeria.views import index, imagem, buscar, nova_imagem, editar_imagem, deletar_imagem

urlpatterns = [
    path('', index, name='index'),
    path('imagem/<int:foto_id>', imagem, name='imagem'),    # Precisa ser igual o argumento na views.py
    path('buscar', buscar, name='buscar'),
    path('nova-imagem', nova_imagem, name='nova_imagem'),
    path('editar-imagem', editar_imagem, name='editar_imagem'),
    path('deletar-imagem', deletar_imagem, name='deletar_imagem'),
]