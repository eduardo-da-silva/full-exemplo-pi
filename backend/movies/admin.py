from django.contrib import admin

# Register all models here
from .models import Genre, Movie

admin.site.register(Genre)
admin.site.register(Movie)


