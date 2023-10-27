from rest_framework.serializers import ModelSerializer, SlugRelatedField

from .models import Usuario
from uploader.models import Image
from uploader.serializers import ImageSerializer

class UsuarioSerializer(ModelSerializer):
    class Meta:
        model = Usuario
        fields = "__all__"
    
    capa_attachment_key = SlugRelatedField(
        source="capa",
        queryset=Image.objects.all(),
        slug_field="attachment_key",
        required=False,
        write_only=True,
    )
    capa = ImageSerializer(required=False, read_only=True)


  
