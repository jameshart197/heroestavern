# Generated by Django 3.2.21 on 2023-10-30 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charshare', '0012_characterdetails_character_art'),
    ]

    operations = [
        migrations.AddField(
            model_name='characterdetails',
            name='gender',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
