# Generated by Django 3.2.21 on 2023-10-23 19:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('charshare', '0010_backgroundcontenttable_feature_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='characterdetails',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
