from rest_framework import serializers
from uploader.models import Image
from uploader.serializers import ImageSerializer

from .models import Genre, Movie, Person, CastingMember

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ("id", "name")

class CastingMemberListSerializer(serializers.ModelSerializer):
    person = serializers.CharField(source="person.name")

    class Meta:
        model = CastingMember
        fields = ("person", "role")

class CastingMemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = CastingMember
        fields = ("person", "role")

class MovieSerializer(serializers.ModelSerializer):
    cover_attachment_key = serializers.SlugRelatedField(
        source="cover",
        queryset=Image.objects.all(),       # pylint: disable=no-member
        slug_field="attachment_key",
        required=False,
        write_only=True,
    )
    cover = ImageSerializer(required=False, read_only=True)
    casting = CastingMemberListSerializer(many=True)

    class Meta:
        model = Movie
        fields = ("id", "title", "year", "rating", "genre", "cover", "cover_attachment_key", "casting")

    def update(self, instance, validated_data):
        if casting := validated_data.pop("casting"):
            instance.casting.all().delete()
            for castingMember in casting:
                CastingMember.objects.create(movie=instance, **castingMember)
        instance.save()
        return instance

class MovieDetailSerializer(serializers.ModelSerializer):
    cover = ImageSerializer(required=False)
    genre = serializers.CharField(source="genre.name")
    casting = CastingMemberListSerializer(many=True)

    class Meta:
        model = Movie
        fields = ("id", "title", "year", "rating", "genre", "cover", "casting")
    

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ("id", "name", "birth_date", "birth_place", "bio")



