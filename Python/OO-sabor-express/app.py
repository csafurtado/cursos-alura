from modelos.restaurante import Restaurante

restaurante_praca = Restaurante('Italia', 'Pizza', 'Rua 12 Beto', 2001)
restaurante_tropical = Restaurante('Banana', 'Tropical', 'Avenida das Nações', 1998)
restaurante_japones = Restaurante('Japa', 'Japonesa', 'Rua dos Aventais', 2010)

restaurante_tropical.alternar_estado()

restaurante_tropical.receber_avaliacao('Cristian', 0)
restaurante_tropical.receber_avaliacao('Fernanda', 8)
restaurante_tropical.receber_avaliacao('Augusto', 6)


def main():    
    Restaurante.listar_restaurantes()

if __name__ == '__main__':
    main()