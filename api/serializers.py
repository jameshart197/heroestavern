from rest_framework import serializers
from charshare import models
from .models import CharacterDetailSerializer


class AttributeSerializer(serializers.ModelSerializer):
    """
    Serializer for the AttributeContentTable model
    """
    class Meta:
        model = models.AttributeContentTable
        fields = [
            'name', 'shortname', 'full_description'
        ]


class SkillsSerializer(serializers.ModelSerializer):
    """
    Serializer for the SkillsContentTable model
    """
    attribute = serializers.ReadOnlyField(source='attribute.name')
    class Meta:
        model = models.SkillsContentTable
        fields = [
            'attribute', 'name', 'shortname', 'full_description'
        ]


class RaceSerializer(serializers.ModelSerializer):
    """
    Serializer for the RaceContentTable model
    """
    class Meta:
        model = models.RaceContentTable
        fields = [
            'name', 'full_description', 'features'
        ]


class SubRaceSerializer(serializers.ModelSerializer):
    """
    Serializer for the SubRaceContentTable model
    """
    race = serializers.ReadOnlyField(source='race.name')
    class Meta:
        model = models.SubRaceContentTable
        fields = [
            'race', 'name', 'full_description', 'features'
        ]


class SpellsSerializer(serializers.ModelSerializer):
    """
    Serializer for the SpellsContentTable model
    """
    class Meta:
        model = models.SpellsContentTable
        fields = [
            'name', 'spell_level', 'full_description', 'spell_reqs'
        ]

    
class ClassSerializer(serializers.ModelSerializer):
    """
    Serializer for the ClassContentTable model
    """
    saving_throw_1 = serializers.ReadOnlyField(source='saving_throw_1.name')
    saving_throw_2 = serializers.ReadOnlyField(source='saving_throw_2.name')
    class Meta:
        model = models.ClassContentTable
        fields = [
            'name', 'full_description', 'features', 'saving_throw_1', 'saving_throw_2'
        ]


class SubclassSerializer(serializers.ModelSerializer):
    """
    Serializer for the SubclassContentTable model
    """
    parent_class = serializers.ReadOnlyField(source='parent_class.name')
    class Meta:
        model = models.SubClassContentTable
        fields = [
            'parent_class', 'name', 'full_description', 'features'
        ]


class LanguageSerializer(serializers.ModelSerializer):
    """
    Serializer for the LanguageContentTable model
    """
    class Meta:
        model = models.LanguageContentTable
        fields = [
            'name', 'full_description'
        ]


class BackgroundSerializer(serializers.ModelSerializer):
    """
    Serializer for the BackgroundContentTable model
    """
    skill_proficiency_1 = serializers.ReadOnlyField(source='skill_proficiency_1.name')
    skill_proficiency_2 = serializers.ReadOnlyField(source='skill_proficiency_2.name')
    class Meta:
        model = models.BackgroundContentTable
        fields = [
            'name', 'full_description', 'feature', 'skill_proficiency_1', 'skill_proficiency_2'
        ]


class AlignmentSerializer(serializers.ModelSerializer):
    """
    Serializer for the AlignmentContentTable model
    """
    class Meta:
        model = models.AlignmentContentTable
        fields = [
            'name', 'full_description'
        ]


class ToolSerializer(serializers.ModelSerializer):
    """
    Serializer for the ToolContentTable model
    """
    class Meta:
        model = models.ToolContentTable
        fields = [
            'name', 'full_description'
        ]


class InstrumentSerializer(serializers.ModelSerializer):
    """
    Serializer for the InstrumentContentTable model
    """
    class Meta:
        model = models.InstrumentContentTable
        fields = [
            'name', 'full_description'
        ]


class CharacterSerializer(serializers.ModelSerializer):
    """
    Serializer for CharacterDetails model for individual character view
    """
    class Meta:
        model = CharacterDetailSerializer
        attributes = [1,2]
        fields = [
            'user', 
            'character_name',
            'subrace',
            'alignment',
            'background',
            'inspiration',
            'faith',
            'age',
            'height',
            'weight',
            'notes',
            'backstory',
            'allies',
            'enemies',
            'factions_and_orgs',
            'hit_points',
            'armor_class',
            'attributes'
        ]