from rest_framework.viewsets import ModelViewSet

from GrandeOrvalho.models import Cliente
from GrandeOrvalho.serializers import ClienteSerializer

class ClienteViewSet(ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer