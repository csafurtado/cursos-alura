class ContaBancaria:
    
    def __init__(self, titular, saldo):
        self.titular = titular.title()
        self.saldo = saldo
        self._ativo = False

    def __str__(self):
        return f'TITULAR:{self.titular} SALDO:{self.saldo} ** {self.ativo}'

    @classmethod
    def ativar_conta(cls, instancia):
        instancia._ativo = not instancia._ativo

    @property
    def ativo(self):
        return 'ATIVADO' if self._ativo else 'DESATIVADO'


class ClienteBanco:
    clientes = []

    def __init__(self, nome, idade, profissao, estado_civil, origem):
        self.nome = nome.title()
        self.idade = int(idade)
        self.profissao = profissao
        self.estado_civil = estado_civil
        self.origem = origem
        ClienteBanco.clientes.append(self)
    

    def __str__(self):
        return f"""\
        Nome: {self.nome}
        Idade: {self.idade}
        Profissao: {self.profissao}
        Estado Civil: {self.estado_civil}
        Origem: {self.origem}
        """

    @classmethod
    def qtd_clientes(cls):
        for cliente in cls.clientes:
            print(cliente)

        print(f"\n Qtd Clientes: {len(cls.clientes)}")




conta_alfredo = ContaBancaria('Alfredo', 10000)
cliente_alfredo = ClienteBanco('Alfredo', 45, 'Bancario', 'Solteiro', 'BR')
conta_genoveva= ContaBancaria('genoveva', 10000)
conta_genoveva = ClienteBanco('genoveva', 45, 'Bancario', 'Casada', 'BR')
conta_pedro = ContaBancaria('Pedro', 10000)
conta_pedro = ClienteBanco('Pedro', 45, 'Bancario', 'Solteiro', 'BR')

ClienteBanco.qtd_clientes()