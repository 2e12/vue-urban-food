from django.shortcuts import render
from rest_framework import viewsets

from demo.models import Post
from demo.serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
