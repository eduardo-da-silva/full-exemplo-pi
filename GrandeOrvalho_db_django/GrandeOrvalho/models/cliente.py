from django.db import models


class Cliente(models.Model):
    SEXO_CHOICES = (("F", "Feminino"), ("M", "Masculino"))
    nome = models.CharField(max_length=50)
    idade = models.DecimalField(max_digits=10, decimal_places=2)
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES, blank=False, null=False)
    cpf = models.CharField(max_length=14)
    telefone = models.CharField(max_length=20)
    notificacao = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.nome} ({self.telefone})"
