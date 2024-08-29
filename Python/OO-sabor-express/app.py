from modelos.restaurante import Restaurante
from modelos.cardapio.bebida import Bebida
from modelos.cardapio.prato import Prato
from modelos.cardapio.sobremesa import Sobremesa


restaurante_praca = Restaurante('Italia', 'Pizza', 'Rua 12 Beto', 2001)

bebida_suco = Bebida('Suco de Melancia', 5.0, 'G')
prato_paozinho = Prato('Paozinho', 2.0, 'O melhor o da cidade')
sobremesa_pudim = Sobremesa('Pudim de Caramelo', 10.0, 'Cremoso', 'G', 'O melhor pudim da Terra!')

restaurante_praca.adicionar_no_cardapio(bebida_suco)
restaurante_praca.adicionar_no_cardapio(prato_paozinho)
restaurante_praca.adicionar_no_cardapio(sobremesa_pudim)

bebida_suco.aplicar_desconto()
prato_paozinho.aplicar_desconto()
sobremesa_pudim.aplicar_desconto()

def main():    
    restaurante_praca.exibir_cardapio

if __name__ == '__main__':
    main()