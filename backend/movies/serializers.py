from rest_framework import serializers
from uploader.models import Image
from uploader.serializers import ImageSerializer

from .models import Genre, Movie

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ("id", "name")

class MovieSerializer(serializers.ModelSerializer):
    cover_attachment_key = serializers.SlugRelatedField(
        source="cover",
        queryset=Image.objects.all(),       # pylint: disable=no-member
        slug_field="attachment_key",
        required=False,
        write_only=True,
    )
    cover = ImageSerializer(required=False, read_only=True)

    class Meta:
        model = Movie
        fields = ("id", "title", "year", "rating", "genre", "cover", "cover_attachment_key")

class MovieDetailSerializer(serializers.ModelSerializer):
    cover = ImageSerializer(required=False)
    genre = serializers.CharField(source="genre.name")

    class Meta:
        model = Movie
        fields = ("id", "title", "year", "rating", "genre", "cover")