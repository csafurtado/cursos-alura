import re   # Lib de regex (expressões regulares)
from validate_docbr import CPF

# Validação para o cpf, no caso que ele é válido
def cpf_valido(cpf):
    cpf_modelo = CPF()

    return cpf_modelo.validate(cpf)  # Retorna True ou False se o CPF em questão é válido

    # return len(cpf) == 11
    
def nome_valido(nome):
    return nome.isalpha()

def rg_valido(rg):
    return len(rg) != 9

# Valida celulares da forma de xx 9xxxx-xxxx
def celular_valido(numero_celular):
    modelo = '[0-9]{2} 9[0-9]{4}-[0-9]{4}' # String que será o modelo (ou regra) para o formato que os celulares terão
    # De 0 a 9, com duas casas, espaço, 9 mais de 0 a 9 com 4 casas, hífen, de 0 a 9 com 4 casas
    
    resposta = re.findall(modelo, numero_celular) # Verifica para este modelo, se o número de celular bate com este ou não (True ou False)

    return resposta     