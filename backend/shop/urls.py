from django.conf.urls import url
from django.urls import include
from rest_framework import routers

from shop.views import ProductViewSet

router = routers.DefaultRouter()
router.register(r'product', ProductViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
