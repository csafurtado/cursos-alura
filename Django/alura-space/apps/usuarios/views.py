from django.shortcuts import render, redirect

from apps.usuarios.forms import LoginForms, CadastroForms

from django.contrib import auth, messages   # Libs de autenticação e de mensagens de login
from django.contrib.auth.models import User # Classe Model específica de Usuário

def login(request):
    form = LoginForms()

    if request.method == 'POST':
        form = LoginForms(request.POST)
        
        if form.is_valid():
            nome = form['nome_login'].value()
            senha = form['senha'].value()

            usuario = auth.authenticate(
                request,
                username=nome,
                password=senha,
            )

            if usuario is not None:
                auth.login(request, usuario)
                messages.success(request, f"{nome} logado com sucesso!")
                return redirect('index')
            else:
                print('teste')
                messages.error(request, f"Erro ao logar! Tente novamente!")
                return redirect('login')


    contexto = {
        'form' : form,
    }

    return render(request, "usuarios/login.html", context=contexto)

def cadastro(request):
    form = CadastroForms()

    if request.method == 'POST':
        form = CadastroForms(request.POST)  # Coleta as informações do formulário preenchido

        # Verifica se o form é válido
        if form.is_valid():
            if form["senha_1"].value() != form["senha_2"].value():
                messages.error(request, f"Senhas não estão iguais!")
                return redirect('cadastro')
            
            nome = form["nome_cadastro"].value()
            email = form["email"].value()
            senha = form["senha_1"].value()

            if User.objects.filter(username=nome).exists():
                messages.error(request, f"Usuário já existe!")
                return redirect('cadastro')
            
            usuario = User.objects.create_user(
                username=nome,
                email=email,
                password=senha,
            )

            usuario.save()
            messages.success(request, f"Cadastro efetuado com sucesso!")

            return redirect('login')

    contexto = {
        'form' : form,
    }

    return render(request, "usuarios/cadastro.html", context=contexto)

def logout(request):
    auth.logout(request)
    messages.success(request, f"Logout efetuado com sucesso!")

    return redirect('login')