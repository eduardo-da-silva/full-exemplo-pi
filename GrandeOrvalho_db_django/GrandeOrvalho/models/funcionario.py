from django.db import models


class Funcionario(models.Model):
    nome = models.CharField(max_length=50)
    cpf = models.CharField(max_length=14)
    email = models.CharField(max_length=150)
    senha = models.CharField(max_length=20)
    telefone = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nome} ({self.telefone})"

    class Meta:
        verbose_name = "Funcionário"

        verbose_name_plural = "Funcionários"
