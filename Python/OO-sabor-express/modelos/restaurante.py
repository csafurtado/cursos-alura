from modelos.avaliacao import Avaliacao
from modelos.cardapio.item_cardapio import ItemCardapio


class Restaurante:
    restaurantes = []
    
    def __init__(self, nome, categoria, endereco, ano_inauguracao):    # Este self se refere ao objeto
        self._nome = str(nome).capitalize()
        self._categoria = categoria.upper()
        self.endereco = endereco
        self.ano_inauguracao = ano_inauguracao
        self._ativo = False
        self._avaliacao = []
        self._cardapio = []
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

    def adicionar_no_cardapio(self, item):
        if isinstance(item, ItemCardapio):
            self._cardapio.append(item)

    @property
    def exibir_cardapio(self):
        print(f'Cardapio do restaurante {self._nome}\n')
        
        for i, item in enumerate(self._cardapio, start=1):
            if hasattr(item, 'tipo'):
                mensagem = f'{i}. {item._nome} | Tamanho: {item.tamanho} | Tipo: {item.tipo} | Descrição: {item.descricao} | Preço: R${item._preco}'
            elif hasattr(item, 'descricao'):
                mensagem = f'{i}. {item._nome} | Descrição: {item.descricao} | Preço: R${item._preco}'
            else:
                mensagem = f'{i}. {item._nome} | Tamanho: {item.tamanho} | Preço: R${item._preco}'

            print(mensagem)
