from django.db import models

from .animais import Animais

class Consulta(models.Model):
    descricao = models.CharField(max_length=150)
    data = models.DateField()
    hora = models.TimeField()
    
    animais = models.ForeignKey(
        Animais, on_delete=models.PROTECT, related_name="consultas"
    )
    
    def __str__(self):
        return self.descricao