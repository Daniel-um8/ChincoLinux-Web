from django.shortcuts import render

def inicio(request):
    return render(request, 'sitio/inicio.html')

def nuevo_inicio(request):
    return render(request, 'sitio/inicio2.html')
