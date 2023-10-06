from django.db import models

from uploader.models import Image

from .cliente import Cliente
from .raca import Raca


class Animais(models.Model):
    SEXO_CHOICES = (("F", "Feminino"), ("M", "Masculino"), ("N", "Nenhuma das opções"))
    nome = models.CharField(max_length=50)
    idade = models.DecimalField(max_digits=10, decimal_places=2)
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES, blank=False, null=False)
    status = models.CharField(max_length=20)
    tipo_sanguineo = models.CharField(max_length=20)

    cliente = models.ManyToManyField(Cliente, related_name="animais")
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
