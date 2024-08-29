from abc import ABC, abstractmethod


class Veiculo(ABC):
    def __init__(self, marca, modelo):
        self._marca = marca
        self._modelo = modelo
        self._ligado = False

    def __str__(self):
        return f'MARCA: {self._marca}\
                MODELO: {self._modelo}\
                ESTADO: {self.ligado}'

    @abstractmethod
    def ligar(self):
        pass

    @property
    def ligado(self):
        return 'LIGADO' if self._ligado else 'DESLIGADO'