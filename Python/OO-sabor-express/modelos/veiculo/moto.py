from modelos.veiculo.veiculo import Veiculo


class Moto(Veiculo):
    def __init__(self, marca, modelo, esportivo):
        super().__init__(marca, modelo)
        self._esportivo = esportivo

    @property
    def esportivo(self):
        return "ESPORTIVA" if self._esportivo else "CASUAL"

    def __str__(self):
        return super().__str__() + f"""\nESPORTIVO: {self.esportivo}"""

    def ligar(self):
        print(f'VROOOOOOOOOOM MOTO {self._marca} - {self._modelo}')
        self._ligado = not self._ligado

        