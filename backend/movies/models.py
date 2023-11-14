from django.db import models
from uploader.models import Image

class Genre(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.name}"


class Movie(models.Model):
    title = models.CharField(max_length=100)
    year = models.IntegerField()
    rating = models.FloatField()
    genre = models.ForeignKey(Genre, on_delete=models.PROTECT)
    cover = models.ForeignKey(Image, on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.title} ({self.year})"


class Person(models.Model):
    name = models.CharField(max_length=100)
    birth_date = models.DateField()
    birth_place = models.CharField(max_length=100)
    bio = models.TextField()


class CastingMember(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.PROTECT, related_name="casting")
    person = models.ForeignKey(Person, on_delete=models.PROTECT, related_name="movies")
    role = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.person.name} as {self.role} in {self.movie.title}"