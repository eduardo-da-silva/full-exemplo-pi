from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from GrandeOrvalho.views import (
    AnimaisViewSet,
    ClienteViewSet,
    ConsultaViewSet,
    EspecieViewSet,
    FuncionarioViewSet,
    RacaViewSet,
)
from uploader.router import router as uploader_router
from usuario.router import router as usuario_router

router = DefaultRouter()
router.register(r"animais", AnimaisViewSet)
router.register(r"clientes", ClienteViewSet)
router.register(r"consultas", ConsultaViewSet)
router.register(r"espécies", EspecieViewSet)
router.register(r"funcionarios", FuncionarioViewSet)
router.register(r"raças", RacaViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api/", include(usuario_router.urls)),
    path("api/media/", include(uploader_router.urls)),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="Token_refresh"),
    # OpenAPI 3
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "api/swagger/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
    path(
        "api/redoc/",
        SpectacularRedocView.as_view(url_name="schema"),
        name="redoc",
    ),
]

urlpatterns += static(settings.MEDIA_ENDPOINT, document_root=settings.MEDIA_ROOT)
