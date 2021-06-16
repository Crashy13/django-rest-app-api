from django.db import models

# Create your models here.
class Order(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price = models.CharField(max_length=255)
    category = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.name
