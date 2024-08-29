from modelos.veiculo.veiculo import Veiculo


class Carro(Veiculo):
    def __init__(self, marca, modelo, portas):
        super().__init__(marca, modelo)
        self._portas = portas

    def __str__(self):
        return super().__str__() + f"""\nQTD PORTAS: {self._portas}"""

    def ligar(self):
        print(f'VROOOOOOOOOOM CARRO {self._marca} - {self._modelo}')
        self._ligado = not self._ligado

        