from rest_framework.serializers import ModelSerializer

from GrandeOrvalho.models import Cliente

class ClienteSerializer(ModelSerializer):
    class Meta:
        model = Cliente
        fields = "__all__"
        