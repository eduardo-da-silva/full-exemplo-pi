from django.db import models

from .especie import Especie

class Raca(models.Model):
    nome = models.CharField(max_length=50)
    
    especie = models.ForeignKey(
        Especie, on_delete=models.PROTECT, related_name="racas"
    )
    
    class Meta:
        verbose_name = "Raça"
        verbose_name_plural = "Raças"
        
    def __str__(self):
        return self.nome
