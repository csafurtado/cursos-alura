from modelos.avaliacao import Avaliacao


class Restaurante:
    restaurantes = []
    
    def __init__(self, nome, categoria, endereco, ano_inauguracao):    # Este self se refere ao objeto
        self._nome = str(nome).capitalize()
        self._categoria = categoria.upper()
        self.endereco = endereco
        self.ano_inauguracao = ano_inauguracao
        self._ativo = False
        self._avaliacao = []
        Restaurante.restaurantes.append(self)

    @classmethod
    def listar_restaurantes(cls):          # O cls agora se refere à classe, não aos objetos dela
        for restaurante in cls.restaurantes:
            print(restaurante)

    def __str__(self):
        return f'{self._nome.ljust(25)} | {self._categoria.ljust(25)} | {self.endereco.ljust(25)} | {str(self.ano_inauguracao).ljust(25)} | {str(self.media_avaliacoes).ljust(25)} | {self.ativo.ljust(25)}'

    @property
    def ativo(self):
        return '⌧' if self._ativo else '☐'

    def alternar_estado(self):
        self._ativo = not self._ativo

    def receber_avaliacao(self, cliente, nota):
        nota_real = nota % 5
        
        if not nota == 0 and nota_real == 0:
            nota_real = 5
            
        avaliacao = Avaliacao(cliente, nota_real)
        self._avaliacao.append(avaliacao)

    @property
    def media_avaliacoes(self):
        if not self._avaliacao:
            return '-'

        soma_notas = sum(avaliacao._nota for avaliacao in self._avaliacao)

        media = round(soma_notas / len(self._avaliacao), 1) # Arredonda com uma casa decimal

        return media