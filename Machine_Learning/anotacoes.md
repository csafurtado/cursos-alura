<h2>Machine Learning: classificação com SKLearn</h2>

**PARA USAR COM JUPYTER NOTEBOOK AQUI NO VSCODE**
Vai ter que instalar o conda :/

<a href="https://colab.research.google.com/drive/1oKs1BMjDG6YlABzUkMTdmN8fYcQjPTBJ#scrollTo=6pbmk_0H7Qmx">Site do Jupyter Colab utilizado para fazer o curso</a>


* Machine Learning (ou aprendizado de máquina) é uma sub-área da inteligência artificial que estuda o reconhecimento de padrões através de dados. Ao invés de implementarmos heurísticas simples, podemos treinar algoritmos, testar, validar contra modelos de base e colocá-los em produção, medindo o resultado de nossos modelos. Estes serão melhorados a cada execução que acontece, pois irão classificar mais rápido as informações e aprender caso erre no julgamento de um resultado.

* Classificação binária: É algo ou não é? Aceita apenas 0 ou 1.

* Aprendizado supervisionado: Alguém instrui o que é correto ou não para o algoritmo.

* Características (ou features) são critérios pelos quais avaliamos uma informação para _classificar_ o que ela é.

* Processo de classificação de informação com algoritmos para isso:
    1. Características (features) que se deseja avaliar
    2. Itens dos quais se deseja fazer avaliação
    3. Treinar o estimador (algoritmo ou modelo) para fazê-lo entender as características
    4. Testar a eficiência do estimador, se ele realmente está conseguindo entender e classificar a informação
    5. Medir a taxa de acerto deste estimador
    6. Otimizar o estimador
    7. Prever resultados de antemão antes de avaliar de fato um item

* 