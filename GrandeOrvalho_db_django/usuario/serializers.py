from rest_framework.serializers import ModelSerializer, SlugRelatedField

from .models import Usuario


class UsuarioSerializer(ModelSerializer):
    class Meta:
        model = Usuario
        fields = "__all__"
