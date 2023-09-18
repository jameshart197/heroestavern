from django.db import models
from charshare.models import SubRaceContentTable, AlignmentContentTable, BackgroundContentTable, User


class CharacterDetailSerializer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    subrace = models.ForeignKey(SubRaceContentTable, on_delete=models.SET_DEFAULT, default=0)
    alignment = models.ForeignKey(AlignmentContentTable, on_delete=models.SET_DEFAULT, default=0)
    background = models.ForeignKey(BackgroundContentTable, on_delete=models.SET_DEFAULT, default=0)
    character_name = 'CharName'
    inspiration = False
    faith = ''
    age = ''
    height = ''
    weight = '' 
    notes = ''
    backstory = ''
    allies = ''
    enemies = ''
    factions_and_orgs = ''
    hit_points = 12
    armor_class = 10
    attributes = []
    spells = []
    levels = []
    savingthrows = []
    skillproficiencies = []
    languages = []
