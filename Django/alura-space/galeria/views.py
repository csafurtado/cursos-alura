from django.shortcuts import render     # Renderizador de um arquivo HTML
from django.http import HttpResponse    # lib responsável por lidar com repsostas HTTP

# Create your views here.
def index(request):
    return render(request, 'index.html')
