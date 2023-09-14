from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from uploader.router import router as uploader_router
from movies.views import GenreViewSet

router = DefaultRouter()
router.register("genres", GenreViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/media/", include(uploader_router.urls)),
    path("api/", include(router.urls)),
]
urlpatterns += static(settings.MEDIA_ENDPOINT, document_root=settings.MEDIA_ROOT)
