from django.db import models

class AttributeContentTable(models.Model):
    name = models.CharField(max_length=50)
    shortname = models.CharField(max_length=5)
    full_description = models.TextField()

    def __str__(self):
        return f'ID: {self.id} - {self.name}'

    class Meta:
        verbose_name = 'Attribute'
