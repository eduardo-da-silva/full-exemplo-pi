from django.contrib import admin

from .models import Animais, Consulta, Especie, Raca

admin.site.register(Consulta)
admin.site.register(Especie)
admin.site.register(Raca)
admin.site.register(Animais)