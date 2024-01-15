from rest_framework import serializers
from clientes.models import Cliente
from clientes.validators import *
from validate_docbr import CPF


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

    # O data irá se referir ao objeto de dados do Modelo
    def validate(self, data):
        if not nome_valido(data['nome']):
            raise serializers.ValidationError({'nome':"O nome não pode conter números!"})
        if not cpf_valido(data['cpf']):
            raise serializers.ValidationError({'cpf':"O CPF não é válido! Somente números são permitidos!"}) # CPF só vem com os números
        if not rg_valido(data['rg']):
            raise serializers.ValidationError({'rg':"O RG deve ter 9 dígitos!"})
        if not celular_valido(data['celular']):
            raise serializers.ValidationError({'celular':"O número de celular deve ter o formato: XX 9XXXX-XXXX!"})
        
        data['cpf'] = CPF().mask(data['cpf']) # Coloca uma máscara no CPF, para enviar o cpf com os traços e pontos

        return data

# Somente para caso se deseje colocar aqui
# def validate_cpf(self, cpf):
#     if len(cpf) != 11:
#         raise serializers.ValidationError("O CPF deve ter 11 dígitos!")
#     return cpf
    
# def validate_nome(self, nome):
#     if not nome.isalpha():
#         raise serializers.ValidationError("Nome não pode conter números!")
#     return nome

# def validate_rg(self, rg):
#     if len(rg) != 9:
#         raise serializers.ValidationError("O RG deve ter 9 dígitos!")
#     return rg

# def validate_celular(self, celular):
#     if len(celular) < 11:
#         raise serializers.ValidationError("O celular precisa ter 11 dígitos!")
#     return celular