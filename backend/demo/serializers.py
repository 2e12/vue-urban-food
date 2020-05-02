from rest_framework import serializers

from demo.models import Post


class PostSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Post
        fields = ['id', 'text',  'author']
