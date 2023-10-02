from rest_framework.serializers import ModelSerializer

from GrandeOrvalho.models import Animais
        
class AnimalSerializer(ModelSerializer):
    class Meta:
        model = Animais
        fields = "__all__"
        
class AnimalDetailSerializer(ModelSerializer):
    class Meta:
        model = Animais
        fields = "__all__"
        depth = 1
        
class AnimalListSerializer(ModelSerializer):
    class Meta:
        model = Animais
        fields = ["id", "nome", "peso", "status"]