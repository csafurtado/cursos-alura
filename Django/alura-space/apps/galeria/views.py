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

    return render(request, "galeria/index.html", context=contexto)

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

def editar_imagem(request, foto_id):
    fotografia = Fotografia.objects.get(id=foto_id)
    form = FotografiaForms(instance=fotografia)

    # Se o form for enviado para o servidor (POST) com as modificações, cria-se um novo form
    # Que irá receber os dados preenchidos no site certinho com seus arquivos também E
    # irá modificar apenas a instância já existente, sem precisar criar um novo objeto da Model
    if request.method == 'POST':
        form = FotografiaForms(request.POST, request.FILES, instance=fotografia)

        if form.is_valid():
            form.save()     # As informações que estão no formulário serão salvas na Model e na tabela do BD
            messages.success(request, 'Fotografia editada com sucesso!')
            return redirect('index')

    contexto = {
        'form':form,
        'foto_id':foto_id,
    }

    return render(request, 'galeria/editar_imagem.html', contexto)

def deletar_imagem(request, foto_id):
    fotografia = Fotografia.objects.get(id=foto_id)
    fotografia.delete()

    messages.success(request, 'Fotografia deletada com sucesso!')

    return redirect('index')

def filtro(request, categoria):
    fotografias = Fotografia.objects.order_by("-data_fotografia").filter(publicada=True, categoria=categoria)    # Ordena pelo mais antigo

    contexto = {
        'cards' : fotografias,
    }

    return render(request, 'galeria/index.html', contexto)