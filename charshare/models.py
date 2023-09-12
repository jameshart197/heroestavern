from django.db import models
from .contentmodels import *
from django.contrib.auth.models import User

# top level models
class CharacterDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    subrace = models.ForeignKey(SubRaceContentTable, on_delete=models.SET_DEFAULT, default=0, related_name="CharacterSubrace")
    alignment = models.ForeignKey(AlignmentContentTable, on_delete=models.SET_DEFAULT, default=0, related_name="CharacterAlignment")
    background = models.ForeignKey(BackgroundContentTable, on_delete=models.SET_DEFAULT, default=0, related_name="CharacterBackground")
    character_name = models.CharField(max_length=200)
    inspiration = models.BooleanField(default=False)
    faith = models.TextField(blank=True)
    age = models.CharField(max_length=24, blank=True) 
    height = models.CharField(max_length=24, blank=True)
    weight = models.CharField(max_length=24, blank=True)  
    notes = models.TextField(blank=True)
    backstory = models.TextField(blank=True)
    allies = models.TextField(blank=True)
    enemies = models.TextField(blank=True)
    factions_and_orgs = models.TextField(blank=True)
    hit_points = models.IntegerField(default=12)
    armor_class = models.IntegerField(default=10)

    def __str__(self):
        return f'ID: {self.id} - {self.character_name}'

    class Meta:
        verbose_name = 'Character'
