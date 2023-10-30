from django import forms

from apps.galeria.models import Fotografia

# Cria um formulário com base em um form
class FotografiaForms(forms.ModelForm):
    class Meta:
        model = Fotografia
        exclude = ['publicada',]
        labels = {
            'descricao': 'Descrição',
            'data_fotografia': 'Data de registro',
            'usuario':'Usuário',
        }

        widgets = {
            'nome': forms.TextInput(attrs={'class':'form-control'}),    # Para o atributo nome de Fotografia (que agora é um campo do Forms atual)
            'legenda': forms.TextInput(attrs={'class':'form-control'}), # Coloca o atributo 'form-control' no elemento HTML que este form irá virar quando estiver no template
            'categoria': forms.Select(attrs={'class':'form-control'}),  # o Select é um dropdown com as categorias
            'descricao': forms.Textarea(attrs={'class':'form-control'}),# esse 'class' é para o estilo do bootstrap
            'foto': forms.FileInput(attrs={'class':'form-control'}),
            'data_fotografia': forms.DateInput(
                format='%d/%m/%y',
                attrs={
                    'class':'form-control',
                    'type':'date',
                }
            ),
            'user': forms.Select(attrs={'class':'form-control'}),
        }