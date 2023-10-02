from rest_framework.serializers import ModelSerializer, SlugRelatedField

from GrandeOrvalho.models import Animais
from uploader.models import Image
from uploader.serializers import ImageSerializer


class AnimalSerializer(ModelSerializer):
    class Meta:
        model = Animais
        fields = "__all__"

    capa_attachment_key = SlugRelatedField(
        source="capa",
        queryset=Image.objects.all(),
        slug_field="attachment_key",
        required=False,
        write_only=True,
    )
    capa = ImageSerializer(required=False, read_only=True)


class AnimalDetailSerializer(ModelSerializer):
    class Meta:
        model = Animais
        fields = "__all__"
        depth = 1

    capa = ImageSerializer(required=False)


class AnimalListSerializer(ModelSerializer):
    class Meta:
        model = Animais
        fields = ["id", "nome", "peso", "status"]
