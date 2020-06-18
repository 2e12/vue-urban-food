from django.conf.urls import url
from django.urls import include
from rest_framework import routers

from shop.views import ProductViewSet, CategoryViewSet

router = routers.DefaultRouter()

router.register(r'product', ProductViewSet)
router.register(r'category', CategoryViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
