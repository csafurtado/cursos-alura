from django.shortcuts import render, get_object_or_404

from galeria.models import Fotografia

def index(request):
    fotografias = Fotografia.objects.order_by("-data_fotografia").filter(publicada=True)    # Ordena pelo mais antigo

    contexto = {
        'cards' : fotografias,
    }

    return render(request, 'galeria/index.html', contexto)

def imagem(request, foto_id):   # Precisa ser igual ao definido na urls.py para esta view
    fotografia = get_object_or_404(Fotografia, pk=foto_id)

    contexto = {
        'fotografia': fotografia,
    }

    return render(request, 'galeria/imagem.html', contexto)