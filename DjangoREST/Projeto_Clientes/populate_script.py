import os, django

# Coleta as configurações do projeto Django atual
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'setup.settings')
django.setup()

from faker import Faker
from validate_docbr import CPF
import random
from clientes.models import Cliente

def criando_pessoas(quantidade_de_pessoas):
    fake = Faker('pt_BR')   # Gera informações em Brasileiro
    Faker.seed(10)

    for _ in range(quantidade_de_pessoas):
        cpf = CPF()
        nome = fake.name()
        email = '{}@{}'.format(nome.lower(),fake.free_email_domain())   # Gera um email
        email = email.replace(' ', '')
        cpf = cpf.generate()    # Gera um cpf válido aleatório
        rg = "{}{}{}{}".format(random.randrange(10, 99),random.randrange(100, 999),random.randrange(100, 999),random.randrange(0, 9) ) 
        celular = "{} 9{}-{}".format(random.randrange(10, 21), random.randrange(4000, 9999), random.randrange(4000, 9999))
        ativo = random.choice([True, False])
        p = Cliente(nome=nome, email=email, cpf=cpf, rg=rg, celular=celular, ativo=ativo)   # Popula no banco de dados uma instância de Cliente gerado com informações aleatórias
        p.save()

criando_pessoas(50) # Cadastra 50 destes clientes, executando a função acima