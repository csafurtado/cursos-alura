<h2>Machine Learning: classificação com SKLearn</h2>

**PARA USAR COM JUPYTER NOTEBOOK AQUI NO VSCODE**
Vai ter que instalar o conda :/

<a href="https://colab.research.google.com/drive/1oKs1BMjDG6YlABzUkMTdmN8fYcQjPTBJ#scrollTo=6pbmk_0H7Qmx">Site do Jupyter Colab utilizado para fazer o curso</a>

<a href="https://colab.research.google.com/drive/11haygBLDGoOYd_u5PiwHJcWLjoLjith6?usp=sharing">Site do Jupyter Colab utilizado para fazer o curso - Projeto2</a>

* Machine Learning (ou aprendizado de máquina) é uma sub-área da inteligência artificial que estuda o reconhecimento de padrões através de dados. Ao invés de implementarmos heurísticas simples, podemos treinar algoritmos, testar, validar contra modelos de base e colocá-los em produção, medindo o resultado de nossos modelos. Estes serão melhorados a cada execução que acontece, pois irão classificar mais rápido as informações e aprender caso erre no julgamento de um resultado.

* Classificação binária: É algo ou não é? Aceita apenas 0 ou 1.

* Aprendizado supervisionado: Alguém instrui o que é correto ou não para o algoritmo.

* Características (ou features) são critérios pelos quais avaliamos uma informação para _classificar_ o que ela é.

* Alvo (ou target) é a informação que queremos prever ou classificar com base nas features.

* Processo de classificação de informação com algoritmos para isso:
    1. Características (features) que se deseja avaliar
    2. Treinar o estimador (algoritmo ou modelo) para fazê-lo entender as características
    3. Testar a eficiência do estimador, se ele realmente está conseguindo entender e classificar a informação
    4. Medir a taxa de acerto deste estimador
    5. Otimizar o estimador
    6. Prever resultados de antemão antes de avaliar de fato um item

* O nome que é dado para a variável de características é **train_x**, para a variável que indica as classes é **train_y**. Pois a ideia é uma função matemática em que:
    <p style="text-align: center; font-weight: bolder">f(x) = y</p>

    * <p style="text-align: center;"> x são as características (ou features) dadas</p>

    * <p style="text-align: center;">y é a classe (ou labels) resultante destas características</p>

* SEMPRE se deve separar os dados de treino dos dados de teste, para que o algoritmo possa fazer previsões fora do escopo dos dados de teste, permitindo assim que ela aprenda e o resultado não fique inviezado. Ex: 100 dados de teste com 100 dados de treino. Deixar metade deles para treino e metade para teste.

* Deve-se manter uma proporção certa entre os treinos e nos testes, para que o algoritmo possa aprender e entender as possibilidades de uma análise, pois se o modelo for treinado apenas com um tipo de resultado, o mesmo irá tender a 'chutar' que os dados de teste tendam para este resultado, pois não foi apresentado de forma proporcional os outros cenários possíveis de resultados (outros targets).