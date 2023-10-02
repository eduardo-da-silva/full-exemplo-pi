import os
from dotenv import load_dotenv
from pathlib import Path

load_dotenv()

MODE = os.getenv("MODE", "DEVELOPMENT")
SECRET_KEY = os.getenv("SECRET_KEY", "django-insecure-4@5j^6^0^4)0%_7n4&-!-#(m*2x^8!$3+^)w5&z!5^_5p!j5")
DEBUG = True
ALLOWED_HOSTS = ["*"]
BASE_DIR = Path(__file__).resolve().parent.parent

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "corsheaders",
    "rest_framework",
    "rest_framework_simplejwt",
    "drf_spectacular",
    "uploader",
    "movies",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True


CORS_ALLOW_ALL_ORIGINS = True  # corsheaders

STATIC_URL = "static/"
MEDIA_ENDPOINT = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media/")
FILE_UPLOAD_PERMISSIONS = 0o640

if MODE == "DEVELOPMENT":
    MY_IP = os.getenv("MY_IP", "127.0.0.1")
    MEDIA_URL = f"http://{MY_IP}:19003/media/"
else:
    MEDIA_URL = "/media/"

REST_FRAMEWORK = {
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    )
}

SPECTACULAR_SETTINGS = {
    "TITLE": "Movie API - Exemplo PI",
    "DESCRIPTION": "API exemplo do Projeto de PI (Movies Management).",
    "VERSION": "1.0.0",
}


print(MODE, MY_IP, MEDIA_URL)