from django.db import models

from uploader.models import Image

from usuario.models import Usuario
from .cliente import Cliente
from .funcionario import Funcionario

class TipoUsuario(models.Model):
    user = models.OneToOneField(Usuario, on_delete=models.CASCADE)
    funcionario = models.ForeignKey(Funcionario, null=True, blank=True, on_delete=models.CASCADE)
    cliente = models.ForeignKey(Cliente, null=True, blank=True, on_delete=models.CASCADE)
    capa = models.ForeignKey(
        Image,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        default=None,
    )
    class Meta:
        verbose_name = "Tipo de usuário"
        verbose_name_plural = "Tipos de usuários"
        
    def __str__(self):
        if self.cliente:
            return f"Cliente: {self.cliente.nome}"
        elif self.funcionario:
            return f"Funcionário: {self.funcionario.nome}"
        return None