import json
from modelos.restaurante import Restaurante
from modelos.cardapio.bebida import Bebida
from modelos.cardapio.prato import Prato
from modelos.cardapio.sobremesa import Sobremesa

import requests

url_restaurantes = 'https://guilhermeonrails.github.io/api-restaurantes/restaurantes.json'
resposta = requests.get(url_restaurantes)

if resposta.status_code == 200:
    dados_resposta_json = resposta.json()
    dados_restaurante_json = {}

    for item in dados_resposta_json:
        nome_restaurante = item['Company']

        # Verifica se o item já está dentro do json de daos de restaurante (verifica se a chave existe)
        if nome_restaurante not in dados_restaurante_json:
            dados_restaurante_json[nome_restaurante] = []

            dados_restaurante_json[nome_restaurante].append({
                "item": item['Item'],
                "price": item['price'],
                "description": item['description'],
            })

else:
    print(f'A resposta veio {resposta.status_code}')


for nome_restaurante , dados_restaurante in dados_restaurante_json.items():
    nome_arquivo = f'{nome_restaurante}.json'

    with open(nome_arquivo, 'w') as arq_restaurante:
        json.dump(dados_restaurante, arq_restaurante, indent=4) # Escreve o conteúdo de um json(dict) para um arquivo


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