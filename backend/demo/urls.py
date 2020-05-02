from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets


# Serializers define the API representation.
from demo.models import Post

# Routers provide an easy way of automatically determining the URL conf.
from demo.views import PostViewSet

router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
