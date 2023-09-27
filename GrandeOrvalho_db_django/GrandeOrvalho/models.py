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
        
class Cliente(models.Model):
    nome = models.CharField(max_length=50)
    cpf = models.CharField(max_length=14)
    email = models.CharField(max_length=150)
    senha = models.CharField(max_length=20)
    telefone = models.CharField(max_length=20)
    notificacao = models.BooleanField(default=True)
    
    def __str__(self):
        return f"{self.nome} ({self.telefone})"
    
class Especie(models.Model):
    nome = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nome
    
    class Meta: 
        verbose_name = "Espécie"
        verbose_name_plural = "Espécies"

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

class Animais(models.Model):
    SEXO_CHOICES = (
        ("F", "Feminino"),
        ("M", "Masculino"),
        ("N", "Nenhuma das opções")
    )
    nome = models.CharField(max_length=50)
    idade = models.IntegerField()
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES, blank=False, null=False)
    status = models.CharField(max_length=20)
    tipo_sanguineo = models.CharField(max_length=20)
    
    cliente = models.ManyToManyField(
        Cliente, related_name="animais"
    )
    raca = models.ForeignKey(
        Raca, on_delete=models.PROTECT, related_name="animais"   
    )
    
    class Meta:
        verbose_name = "Animais"
        verbose_name_plural = "Animais"
        
    def __str__(self):
        return self.nome

class Consulta(models.Model):
    descricao = models.CharField(max_length=150)
    data = models.DateField()
    hora = models.TimeField()
    
    animais = models.ForeignKey(
        Animais, on_delete=models.PROTECT, related_name="consultas"
    )
    
    def __str__(self):
        return self.descricao