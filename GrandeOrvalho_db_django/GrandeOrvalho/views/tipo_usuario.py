from rest_framework.viewsets import ModelViewSet

from GrandeOrvalho.models import TipoUsuario

from GrandeOrvalho.serializers import TipoUsuarioSerializer


class TipoUsuarioViewSet(ModelViewSet):
    queryset = TipoUsuario.objects.all()
    serializer_class = TipoUsuarioSerializer
