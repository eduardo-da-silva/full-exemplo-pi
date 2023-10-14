from django.db import models


class Funcionario(models.Model):
    SEXO_CHOICES = (("F", "Feminino"), ("M", "Masculino"))
    nome = models.CharField(max_length=50)
    idade = models.DecimalField(max_digits=10, decimal_places=2)
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES, blank=False, null=False)
    cpf = models.CharField(max_length=14)
    telefone = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nome} ({self.telefone})"

    class Meta:
        verbose_name = "Funcionário"
        verbose_name_plural = "Funcionários"
