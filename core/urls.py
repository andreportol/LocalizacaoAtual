from django.urls import path

from .views import MapaView

urlpatterns = [
    path('', MapaView.as_view(), name='index')
]