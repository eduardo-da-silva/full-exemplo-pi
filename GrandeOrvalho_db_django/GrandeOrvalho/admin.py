from django.contrib import admin

from .models import Animais, Cliente, Consulta, Especie, Funcionario, Raca, TipoUsuario

admin.site.register(Funcionario)
admin.site.register(Cliente)
admin.site.register(Consulta)
admin.site.register(Especie)
admin.site.register(Raca)
admin.site.register(Animais)
admin.site.register(TipoUsuario)

class TipoUsuarioAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'funcionario', 'cliente')
