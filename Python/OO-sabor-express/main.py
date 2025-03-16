from fastapi import FastAPI, Query
import requests

app = FastAPI()


@app.get('/app/hello')
def hello_world():
    """
    Essa é a API do Hello World.
    """
    
    return {'Hello':'World'}

@app.get('/api/restaurantes')
def get_restaurantes(restaurante:str = Query(None)): #Ao adicionar Query, a url terá o formato /api/restaurantes?restaurante=nome_restaurante
    """
    Essa API traz os dados de todos os restaurantes ou de apenas um caso especificado no argumento
    """
    
    
    url_restaurantes = 'https://guilhermeonrails.github.io/api-restaurantes/restaurantes.json'
    resposta = requests.get(url_restaurantes)

    if resposta.status_code == 200:
        dados_resposta_json = resposta.json()

        if restaurante is None:
            return{'Dados': dados_resposta_json}

        dados_restaurante_json = []

        for item in dados_resposta_json:

            # Verifica se o item já está dentro do json de daos de restaurante (verifica se a chave existe)
            if item['Company'] == restaurante:
                cardapio_restaurante = {
                    "item": item['Item'],
                    "price": item['price'],
                    "description": item['description'],
                }

                dados_restaurante_json.append(cardapio_restaurante)

        return {'Restaurante': restaurante,
                'Cardapio': dados_restaurante_json}
    else:
        return(f'A resposta veio {resposta.status_code}')


# Executar o servidor Uvicorn pelo comando 'uvicorn main:app --reload'