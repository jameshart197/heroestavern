from rest_framework import serializers
from charshare import models


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
    saving_throw_1 = serializers.ReadOnlyField(source='attribute.name')
    saving_throw_2 = serializers.ReadOnlyField(source='attribute.name')
    class Meta:
        model = models.ClassContentTable
        fields = [
            'name', 'full_description', 'features', 'saving_throw_1', 'saving_throw_2'
        ]


class SubclassSerializer(serializers.ModelSerializer):
    """
    Serializer for the SubclassContentTable model
    """
    parent_class = serializers.ReadOnlyField(source='class.name')
    class Meta:
        model = models.SubClassContentTable
        fields = [
            'parent_class', 'name', 'full_description', 'features'
        ]