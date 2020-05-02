from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=2000)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=2000)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    categories = models.ManyToManyField('Category')
    discount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
