from django.shortcuts import render
from django.views.generic import TemplateView


class MapaView(TemplateView):
    template_name = 'index.html'
