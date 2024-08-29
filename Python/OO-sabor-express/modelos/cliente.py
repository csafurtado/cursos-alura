class Cliente:
    def __init__(self, nome, idade, origem, profissao):
        self.nome = nome
        self.idade = idade
        self.origem = origem
        self.profissao = profissao

    def __str__(self):
        return f'| {self.nome} | {self.idade} | {self.origem} | {self.profissao} |'

Cliente('Alfredo', 45, 'Brasil', 'bancário')
Cliente('Vânia', 32, 'Brasil', 'gerente')
Cliente('Flávio', 45, 'Brasil', 'empreendedor')