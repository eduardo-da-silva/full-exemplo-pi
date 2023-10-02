from rest_framework.serializers import ModelSerializer

from GrandeOrvalho.models import Consulta
        
class ConsultaSerializer(ModelSerializer):
    class Meta: 
        model = Consulta
        fields = "__all__"