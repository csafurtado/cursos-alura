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

def buscar(request):
    # Coleta na url os argumentos depois do '?' ex: www.site.com/conteudo?buscar=item 
    nome_a_buscar = request.GET['buscar']

    # Verifica se, no campo de nome dos objetos da Model em questão, tem dentro dele a variável em questão 
    fotografias_buscadas = Fotografia.objects.order_by("-data_fotografia").filter(nome__icontains=nome_a_buscar, publicada=True)

    contexto = {
        'cards' : fotografias_buscadas
    }

    return render(request, "galeria/buscar.html", context=contexto)