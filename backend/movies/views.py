from rest_framework import viewsets

from movies.models import Genre, Movie
from movies.serializers import GenreSerializer, MovieSerializer, MovieDetailSerializer


class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()  # pylint: disable = E1101
    serializer_class = GenreSerializer

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()  # pylint: disable = E1101
    serializer_class = MovieSerializer

    def get_serializer_class(self):
        if self.action in ["retrieve", "list"]:
            return MovieDetailSerializer
        return super().get_serializer_class()