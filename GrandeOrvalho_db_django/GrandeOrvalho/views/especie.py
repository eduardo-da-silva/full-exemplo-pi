from rest_framework.viewsets import ModelViewSet

from GrandeOrvalho.models import Especie
from GrandeOrvalho.serializers import EspecieSerializer
    
class EspecieViewSet(ModelViewSet):
    queryset = Especie.objects.all()
    serializer_class = EspecieSerializer