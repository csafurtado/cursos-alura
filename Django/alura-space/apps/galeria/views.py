from django.shortcuts import render, get_object_or_404, redirect

from apps.galeria.models import Fotografia
from apps.galeria.forms import FotografiaForms

from django.contrib import messages


def index(request):
    # Não permite o usuário a acessar essa view se não estiver logado
    if not request.user.is_authenticated:
        messages.error(request, 'Logue para ter acesso à página!')
        return redirect('login')


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
    # Não permite o usuário a acessar essa view se não estiver logado
    if not request.user.is_authenticated:
        messages.error(request, 'Logue para ter acesso à página!')
        return redirect('login')

    # Coleta na url os argumentos depois do '?' ex: www.site.com/conteudo?buscar=item 
    nome_a_buscar = request.GET['buscar']

    # Verifica se, no campo de nome dos objetos da Model em questão, tem dentro dele a variável em questão 
    fotografias_buscadas = Fotografia.objects.order_by("-data_fotografia").filter(nome__icontains=nome_a_buscar, publicada=True)

    contexto = {
        'cards' : fotografias_buscadas
    }

    return render(request, "galeria/buscar.html", context=contexto)

def nova_imagem(request):
    # Não permite o usuário a acessar essa view se não estiver logado
    if not request.user.is_authenticated:
        messages.error(request, 'Logue para ter acesso à página!')
        return redirect('login')

    form = FotografiaForms()

    if request.method == 'POST':
        # Passa as informações preenchidas no Form que veio da requisição para um novo Form igual e os arquivos enviados por Upload
        form = FotografiaForms(request.POST, request.FILES)    

        if form.is_valid():
            form.save()     # As informações que estão no formulário serão salvas na Model e na tabela do BD
            messages.success(request, 'Nova fotografia cadastrada!')
            return redirect('index')

    contexto = {
        'form':form,
    }

    return render(request, 'galeria/nova_imagem.html', contexto)

def editar_imagem(request):
    pass

def deletar_imagem(request):
    pass