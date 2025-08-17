from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('nuevo_inicio/', views.nuevo_inicio, name='nuevo_inicio'),
]
