from django import forms


class LoginForms(forms.Form):
    nome_login = forms.CharField(
        label="Nome de Login",
        required=True,
        max_length=100,
        widget=forms.TextInput(
            attrs={         # Usado para aplicar confgurações HTML e CSS no elemento do formulário
                'class':'form-control',
                'placeholder': 'Ex. João da Silva',
            }
        )
    )

    senha = forms.CharField(
        label="Senha",
        required=True,
        max_length=70,
        widget=forms.PasswordInput(     # Adiciona a configuração de um campo de senha (caracteres ocultos)
            attrs={
                'class':'form-control',
                'placeholder': 'Digite a senha',
            }
        )        
    )

class CadastroForms(forms.Form):
    nome_cadastro=forms.CharField(
        label="Nome de Cadastro",
        required=True,
        max_length=100,
        widget=forms.TextInput(
            attrs={         # Usado para aplicar confgurações HTML e CSS no elemento do formulário
                'class':'form-control',
                'placeholder': 'Ex. João da Silva',
            }
        )        
    )

    email=forms.EmailField(
        label="Email de cadastro",
        required=True,
        max_length=100,
        widget=forms.EmailInput(
            attrs={
                'class':'form-control',
                'placeholder': 'Ex. João da Silva',
            }
        )
    )

    senha_1 = forms.CharField(
        label="Senha",
        required=True,
        max_length=70,
        widget=forms.PasswordInput(     # Adiciona a configuração de um campo de senha (caracteres ocultos)
            attrs={
                'class':'form-control',
                'placeholder': 'Digite a senha',
            }
        )        
    )

    senha_2 = forms.CharField(
        label="Confirme a Senha",
        required=True,
        max_length=70,
        widget=forms.PasswordInput(     # Adiciona a configuração de um campo de senha (caracteres ocultos)
            attrs={
                'class':'form-control',
                'placeholder': 'Digite novamente a senha',
            }
        )        
    )