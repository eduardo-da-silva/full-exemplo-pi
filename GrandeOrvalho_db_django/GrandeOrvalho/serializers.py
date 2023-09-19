from rest_framework.serializers import ModelSerializer

from GrandeOrvalho.models import Funcionario, Cliente, Consulta, Especie, Raca, Animais

class FuncionarioSerializer(ModelSerializer):
    class Meta:
        model = Funcionario
        fields = "__all__"
        
class ClienteSerializer(ModelSerializer):
    class Meta:
        model = Cliente
        fields = "__all__"
        
class ConsultaSerializer(ModelSerializer):
    class Meta: 
        model = Consulta
        fields = "__all__"
        
class EspecieSerializer(ModelSerializer):
    class Meta:
        model = Especie
        fields = "__all__"
        
class RacaSerializer(ModelSerializer):
    class Meta:
        model = Raca
        fields = "__all__"
        
class AnimalSerializer(ModelSerializer):
    class Meta:
        model = Animais
        fields = "__all__"
        
class AnimalDetailSerializer(ModelSerializer):
    class Meta:
        model = Animais
        fields = "__all__"
        depth = 1
        
class AnimalListSerializer(ModelSerializer):
    class Meta:
        model = Animais
        fields = ["id", "nome", "peso", "status"]