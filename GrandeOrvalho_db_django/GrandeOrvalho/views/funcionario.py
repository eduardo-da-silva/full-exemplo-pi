from rest_framework.viewsets import ModelViewSet

from GrandeOrvalho.models import Funcionario
from GrandeOrvalho.serializers import FuncionarioSerializer

class FuncionarioViewSet(ModelViewSet):
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer