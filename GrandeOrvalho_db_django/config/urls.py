from django.contrib import admin
from django.urls import include, path

from usuario.router import router as usuario_router

from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from GrandeOrvalho.views import FuncionarioViewSet, ClienteViewSet, ConsultaViewSet, EspecieViewSet, RacaViewSet, AnimaisViewSet

router = DefaultRouter()
router.register(r"funcionarios", FuncionarioViewSet)
router.register(r"clientes", ClienteViewSet)
router.register(r"consultas", ConsultaViewSet)
router.register(r"espécies", EspecieViewSet)
router.register(r"raças", RacaViewSet)
router.register(r"animais", AnimaisViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include(router.urls)),
    path("token/", TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name="Token_refresh"),
    path("api/", include(usuario_router.urls)),
]
