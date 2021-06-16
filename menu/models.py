from django.db import models

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price = models.IntegerField(default=5)
    category = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.name
