from django.db import models

# Create your models here.
class Order(models.Model):
    customer = models.CharField(max_length=255, default='')
    items = models.JSONField()
    subtotal = models.IntegerField(default=0)

    def __str__(self):
        return self.customer
