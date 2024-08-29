from modelos.veiculo.carro import Carro
from modelos.veiculo.moto import Moto


moto1 = Moto("Cavazaqui", "XPTO6000", False)
moto2 = Moto("Çusuqui", 'HDMAX', True)
carro1 = Carro("Fiate", "Dos", 4)
carro2 = Carro("Koenigsegg", "CCXR Trevita", 2)

moto2.ligar()
carro2.ligar()


def main():
    print(moto1, moto2, carro1, carro2, sep='\n\n')

if __name__ == '__main__':
    main()