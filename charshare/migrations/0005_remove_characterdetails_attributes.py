# Generated by Django 3.2.21 on 2023-09-25 18:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('charshare', '0004_characterdetails_attributes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='characterdetails',
            name='attributes',
        ),
    ]