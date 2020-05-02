from django.conf import settings
from django.db import models


class Post(models.Model):
    author = models.CharField(max_length=35)
    text = models.TextField(max_length=800)

    def __str__(self):
        return self.text
