from rest_framework.viewsets import ModelViewSet

from GrandeOrvalho.models import Raca
from GrandeOrvalho.serializers import RacaSerializer
    
class RacaViewSet(ModelViewSet):
    queryset = Raca.objects.all()
    serializer_class = RacaSerializer
