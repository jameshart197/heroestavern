# Generated by Django 3.2.21 on 2023-09-25 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charshare', '0005_remove_characterdetails_attributes'),
    ]

    operations = [
        migrations.AddField(
            model_name='characterdetails',
            name='attributes',
            field=models.ManyToManyField(to='charshare.CharacterAttributes'),
        ),
    ]
