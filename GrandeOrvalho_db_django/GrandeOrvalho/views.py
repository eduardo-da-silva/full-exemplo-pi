from rest_framework.viewsets import ModelViewSet

from GrandeOrvalho.models import Funcionario, Cliente, Consulta, Especie, Raca, Animais
from GrandeOrvalho.serializers import FuncionarioSerializer, ClienteSerializer, ConsultaSerializer, EspecieSerializer, RacaSerializer, AnimalSerializer, AnimalDetailSerializer, AnimalListSerializer

class FuncionarioViewSet(ModelViewSet):
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer
    
class ClienteViewSet(ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    
class ConsultaViewSet(ModelViewSet):
    queryset = Consulta.objects.all()
    serializer_class = ConsultaSerializer
    
class EspecieViewSet(ModelViewSet):
    queryset = Especie.objects.all()
    serializer_class = EspecieSerializer
    
class RacaViewSet(ModelViewSet):
    queryset = Raca.objects.all()
    serializer_class = RacaSerializer
    
class AnimaisViewSet(ModelViewSet):
    queryset = Animais.objects.all()
    
    def get_serializer_class(self):
        if self.action in "list":
            return AnimalListSerializer
        elif self.action == "retrieve":
            return AnimalDetailSerializer
        return AnimalSerializer