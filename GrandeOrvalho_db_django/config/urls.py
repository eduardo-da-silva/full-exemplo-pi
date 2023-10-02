from django.contrib import admin
from django.urls import include, path

from usuario.router import router as usuario_router

from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)

from GrandeOrvalho.views import AnimaisViewSet, ClienteViewSet, ConsultaViewSet, EspecieViewSet, FuncionarioViewSet, RacaViewSet

router = DefaultRouter()
router.register(r"animais", AnimaisViewSet)
router.register(r"clientes", ClienteViewSet)
router.register(r"consultas", ConsultaViewSet)
router.register(r"espécies", EspecieViewSet)
router.register(r"funcionarios", FuncionarioViewSet)
router.register(r"raças", RacaViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include(router.urls)),
    path("api/", include(usuario_router.urls)),
    path("token/", TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name="Token_refresh"),
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
