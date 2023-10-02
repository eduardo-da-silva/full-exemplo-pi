from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated, DjangoModelPermissions
from movies.models import Genre, Movie
from movies.serializers import GenreSerializer, MovieSerializer, MovieDetailSerializer


class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()  # pylint: disable = E1101
    serializer_class = GenreSerializer

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()  # pylint: disable = E1101
    serializer_class = MovieSerializer
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action in ["retrieve", "list"]:
            return MovieDetailSerializer
        return super().get_serializer_class()