from rest_framework.serializers import ModelSerializer, SlugRelatedField

from GrandeOrvalho.models import Animais
from uploader.models import Image
from uploader.serializers import ImageSerializer


class AnimalSerializer(ModelSerializer):
    capa_attachment_key = SlugRelatedField(
        source="capa",
        queryset=Image.objects.all(),
        slug_field="attachment_key",
        required=False,
        write_only=True,
    )
    capa = ImageSerializer(required=False, read_only=True)

    class Meta:
        model = Animais
        fields = "__all__"


class AnimalDetailSerializer(ModelSerializer):
    capa = ImageSerializer(required=False)
    
    class Meta:
        model = Animais
        fields = "__all__"
        depth = 1


class AnimalListSerializer(ModelSerializer):
    capa = ImageSerializer(required=False)    
    
    class Meta:
        model = Animais
        fields = ["id", "nome", "peso", "status"]
