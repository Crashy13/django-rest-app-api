# Generated by Django 3.2.4 on 2021-06-15 20:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='category',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
