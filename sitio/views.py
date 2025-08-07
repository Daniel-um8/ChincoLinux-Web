from django.shortcuts import render

def inicio(request):
    return render(request, 'sitio/inicio.html')
