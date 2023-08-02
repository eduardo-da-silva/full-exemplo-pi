from rest_framework import viewsets

from movies.models import Genre
from movies.serializers import GenreSerializer


class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()  # pylint: disable = E1101
    serializer_class = GenreSerializer
