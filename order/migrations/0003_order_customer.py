# Generated by Django 3.2.4 on 2021-06-16 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0002_auto_20210616_2006'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='customer',
            field=models.CharField(default='', max_length=255),
        ),
    ]
