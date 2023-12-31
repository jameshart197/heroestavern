from rest_framework import serializers
from charshare import models
from rest_framework.authtoken.models import Token


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
            'id', 'name', 'full_description', 'features'
        ]


class SubRaceSerializer(serializers.ModelSerializer):
    """
    Serializer for the SubRaceContentTable model
    """
    race = serializers.ReadOnlyField(source='race.name')
    class Meta:
        model = models.SubRaceContentTable
        fields = [
            'id', 'race', 'name', 'full_description', 'features'
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
            'id', 'name', 'full_description', 'features', 'saving_throw_1', 'saving_throw_2'
        ]


class SubclassSerializer(serializers.ModelSerializer):
    """
    Serializer for the SubclassContentTable model
    """
    parent_class = serializers.ReadOnlyField(source='parent_class.name')
    class Meta:
        model = models.SubClassContentTable
        fields = [
            'id', 'parent_class', 'name', 'full_description', 'features'
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
            'id', 'name', 'full_description', 'feature', 'skill_proficiency_1', 'skill_proficiency_2'
        ]


class AlignmentSerializer(serializers.ModelSerializer):
    """
    Serializer for the AlignmentContentTable model
    """
    class Meta:
        model = models.AlignmentContentTable
        fields = [
            'id', 'name', 'full_description'
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


class CharacterAttributesSerializer(serializers.ModelSerializer):
    """
    Serializer for list of attributes per character
    """
    class Meta:
        model = models.CharacterAttributes
        fields = [
            'id',
            'attribute',
            'score',
            'character'
        ]


class CharacterLevelsSerializer(serializers.ModelSerializer):
    """
    Serializer for list of levels per character
    """
    class Meta:
        model = models.CharacterLevels
        fields = [
            'id',
            'char_class',
            'level',
            'character'
        ]


class CharacterSkillsSerializer(serializers.ModelSerializer):
    """
    Serializer for list of skill proficiencies per character
    """
    skill = serializers.ReadOnlyField(source='skill.name')
    class Meta:
        model = models.CharacterSkillProficiencies
        fields = [
            'skill',
            'proficiency_level'
        ]


class CharacterSavingThrowsSerializer(serializers.ModelSerializer):
    """
    Serializer for list of saving throws per character
    """
    saving_throw = serializers.ReadOnlyField(source='attribute.name')
    class Meta:
        model = models.CharacterSavingThrows
        fields = [
            'saving_throw'
        ]


class CharacterSpellsSerializer(serializers.ModelSerializer):
    """
    Serializer for list of spells per character
    """
    spell = serializers.ReadOnlyField(source='spell.name')
    class Meta:
        model = models.CharacterSpells
        fields = [
            'spell'
        ]


class CharacterLanguagesSerializer(serializers.ModelSerializer):
    """
    Serializer for list of languages per character
    """
    languages = serializers.ReadOnlyField(source='language_granted.name')
    class Meta:
        model = models.CharacterLanguages
        fields = [
            'languages'
        ]


class CharacterSubclassSerializer(serializers.ModelSerializer):
    """
    Serializer for list of Subclass per character
    """
    class Meta:
        model = models.CharacterSubclass
        fields = [
            'id', 'subclass', 'character'
        ]


class CharacterLevelSerializer(serializers.ModelSerializer):
    """
    Serializer for list of Levels per character
    """
    class Meta:
        model = models.CharacterLevels
        fields = [
            'id', 'level', 'character', 'char_class'
        ]


class CharacterCreationSerializer(serializers.ModelSerializer):
    """
    Serializer for creating a character
    """
    def validate_character_art(self, value):
        if value.size > 2 * 1024 * 1024:
            raise serializers.ValidationError('Image size larger than 2MB!')
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Image height larger than 4096px!'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width larger than 4096px!'
            )
        return value
    class Meta:
        model = models.CharacterDetails
        fields = [
            'id',
            'gender',
            'character_art',
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
            'attributes',
            'levels',
            'skills',
            'saving_throws',
            'spells',
            'languages',
            'subclass'
        ]


class CharacterSerializer(serializers.ModelSerializer):
    """
    Serializer for viewing a character
    """
    user = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = models.CharacterDetails
        fields = [
            'id',
            'user', 
            'character_name',
            'gender',
            'character_art',
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
            'attributes',
            'levels',
            'skills',
            'saving_throws',
            'spells',
            'languages',
            'subclass'
        ]
        depth=2


class CharacterUpdateSerializer(serializers.ModelSerializer):
    """
    Serializer for updating a character
    """
    class Meta:
        model = models.CharacterDetails
        fields = [
            'gender',
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
            'attributes',
            'levels',
            'skills',
            'saving_throws',
            'spells',
            'languages',
            'subclass'
        ]
