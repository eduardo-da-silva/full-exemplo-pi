from rest_framework.viewsets import ModelViewSet

from .models import Usuario
from .serializers import UsuarioSerializer
from uploader.views import ImageUploadViewSet

class UsuarioViewSet(ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
