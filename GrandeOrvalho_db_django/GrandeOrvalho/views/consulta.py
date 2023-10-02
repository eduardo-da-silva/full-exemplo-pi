from rest_framework.viewsets import ModelViewSet

from GrandeOrvalho.models import Consulta
from GrandeOrvalho.serializers import ConsultaSerializer
    
class ConsultaViewSet(ModelViewSet):
    queryset = Consulta.objects.all()
    serializer_class = ConsultaSerializer