from rest_framework.routers import DefaultRouter

from uploader import views

app_name = "uploader"

router = DefaultRouter()
router.register("images", views.ImageUploadViewSet)
router.register("documents", views.DocumentUploadViewSet)
