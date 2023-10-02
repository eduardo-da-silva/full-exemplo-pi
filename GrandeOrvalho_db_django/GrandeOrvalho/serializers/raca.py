from rest_framework.serializers import ModelSerializer

from GrandeOrvalho.models import Raca


class RacaSerializer(ModelSerializer):
    class Meta:
        model = Raca
        fields = "__all__"
