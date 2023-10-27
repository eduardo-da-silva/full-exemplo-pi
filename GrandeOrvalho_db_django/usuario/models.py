from django.contrib.auth.models import AbstractUser,  Group, Permission
from django.db import models
from django.utils.translation import gettext_lazy as _

from .managers import CustomUserManager
from uploader.models import Image


class Usuario(AbstractUser):
    class TipoUsuario(models.IntegerChoices):
        FUNCIONARIO = 1
        CLIENTE = 2
        
    class Genero(models.IntegerChoices):
        MASCULINO = (1, "Homem",)
        FEMININO = (2, "Mulher",)
        OUTRO = (3, "Prefiro não comentar",)
        
    nome = models.CharField(max_length=50, default=0)
    idade = models.DecimalField(max_digits=10, decimal_places=2, default=16)
    genero = models.IntegerField(choices=Genero.choices, default=Genero.OUTRO, verbose_name="Gênero")
    username = None
    email = models.EmailField(_("e-mail address"), unique=True)
    cpf = models.CharField(_("CPF"), max_length=11, blank=True, null=True)
    telefone = models.CharField(_("Phone"), max_length=11, blank=True, null=True)
    user = models.IntegerField(choices=TipoUsuario.choices, default=TipoUsuario.CLIENTE, verbose_name="Tipo de Usuário")
    data_nascimento = models.DateField(_("Birth Date"), auto_now=False, auto_now_add=False, blank=True, null=True)
    notificacao = models.BooleanField(default=True)
    capa = models.ForeignKey(
        Image,
        related_name="+",
        on_delete=models.PROTECT,
        null=True,
        blank=True,
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    EMAIL_FIELD = "email"

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "Usuário"
        verbose_name_plural = "Usuários"
        ordering = ["-date_joined"]