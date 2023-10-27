from django.db import models

from uploader.models import Image

from usuario.models import Usuario

from .raca import Raca


class Animais(models.Model):
    class Genero(models.IntegerChoices):
        MACHO = (1, "Macho",)
        FEMEA = (2, "Fêmea",)
        
    nome = models.CharField(max_length=50)
    idade = models.DecimalField(max_digits=10, decimal_places=2)
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    genero = models.IntegerField(choices=Genero.choices, default=Genero.MACHO, verbose_name="Gênero")
    status = models.CharField(max_length=20)
    tipo_sanguineo = models.CharField(max_length=20)

    cliente = models.ForeignKey(Usuario, on_delete=models.PROTECT, related_name="animais", default=1)
    raca = models.ForeignKey(Raca, on_delete=models.PROTECT, related_name="animais")
    capa = models.ForeignKey(
        Image,
        related_name="+",
        on_delete=models.PROTECT,
    )

    class Meta:
        verbose_name = "Animais"
        verbose_name_plural = "Animais"

    def __str__(self):
        return self.nome
