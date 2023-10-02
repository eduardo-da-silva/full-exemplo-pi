from rest_framework.viewsets import ModelViewSet

from GrandeOrvalho.models import Animais
from GrandeOrvalho.serializers import AnimalSerializer
from GrandeOrvalho.serializers import AnimalListSerializer
from GrandeOrvalho.serializers import AnimalDetailSerializer

class AnimaisViewSet(ModelViewSet):
    queryset = Animais.objects.all()
    
    def get_serializer_class(self):
        if self.action in "list":
            return AnimalListSerializer
        elif self.action == "retrieve":
            return AnimalDetailSerializer
        return AnimalSerializer