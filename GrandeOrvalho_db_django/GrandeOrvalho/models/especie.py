from django.db import models


class Especie(models.Model):
    nome = models.CharField(max_length=50)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = "Espécie"
        verbose_name_plural = "Espécies"
