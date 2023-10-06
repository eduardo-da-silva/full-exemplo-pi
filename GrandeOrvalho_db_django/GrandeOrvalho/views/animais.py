from rest_framework.viewsets import ModelViewSet

from GrandeOrvalho.models import Animais
from GrandeOrvalho.serializers import (
    AnimalDetailSerializer,
    AnimalListSerializer,
    AnimalSerializer,
)


class AnimaisViewSet(ModelViewSet):
    queryset = Animais.objects.all()
    serializer_class = AnimalDetailSerializer, AnimalListSerializer, AnimalSerializer,

    def get_serializer_class(self):
        if self.action in "list":
            return AnimalListSerializer
        elif self.action == "retrieve":
            return AnimalDetailSerializer
        return AnimalSerializer
