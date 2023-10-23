from django.urls import path
from apps.galeria.views import index, imagem, buscar

urlpatterns = [
    path('', index, name='index'),
    path('imagem/<int:foto_id>', imagem, name='imagem'),    # Precisa ser igual o argumento na views.py
    path('buscar', buscar, name='buscar'),
]