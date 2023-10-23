from rest_framework import generics, views
from charshare import models
from api import serializers


class AttributeList(generics.ListAPIView):
    """
    List base attributes
    """
    serializer_class = serializers.AttributeSerializer
    queryset = models.AttributeContentTable.objects.all()


class SkillsList(generics.ListAPIView):
    """
    List base skills
    """
    serializer_class = serializers.SkillsSerializer
    queryset = models.SkillsContentTable.objects.all()


class RaceList(generics.ListAPIView):
    """
    List base Races
    """
    serializer_class = serializers.RaceSerializer
    queryset = models.RaceContentTable.objects.all()


class SubRaceList(generics.ListAPIView):
    """
    List base SubRaces
    """
    serializer_class = serializers.SubRaceSerializer
    queryset = models.SubRaceContentTable.objects.all()


class SpellsList(generics.ListAPIView):
    """
    List base Spells
    """
    serializer_class = serializers.SpellsSerializer
    queryset = models.SpellsContentTable.objects.all()


class ClassList(generics.ListAPIView):
    """
    List base Classes
    """
    serializer_class = serializers.ClassSerializer
    queryset = models.ClassContentTable.objects.all()


class SubClassList(generics.ListAPIView):
    """
    List base Subclasses
    """
    serializer_class = serializers.SubclassSerializer
    queryset = models.SubClassContentTable.objects.all()


class LanguageList(generics.ListAPIView):
    """
    List base Languages
    """
    serializer_class = serializers.LanguageSerializer
    queryset = models.LanguageContentTable.objects.all()
    

class BackgroundList(generics.ListAPIView):
    """
    List base Backgrounds
    """
    serializer_class = serializers.BackgroundSerializer
    queryset = models.BackgroundContentTable.objects.all()


class AlignmentList(generics.ListAPIView):
    """
    List base Alignments
    """
    serializer_class = serializers.AlignmentSerializer
    queryset = models.AlignmentContentTable.objects.all()


class ToolList(generics.ListAPIView):
    """
    List base Tools
    """
    serializer_class = serializers.ToolSerializer
    queryset = models.ToolContentTable.objects.all()


class InstrumentList(generics.ListAPIView):
    """
    List base Instruments
    """
    serializer_class = serializers.InstrumentSerializer
    queryset = models.InstrumentContentTable.objects.all()


class CharacterAttributes(generics.ListAPIView):
    """
    List attributes by character
    """
    serializer_class = serializers.CharacterAttributesSerializer
    queryset = models.CharacterAttributes.objects.all()


class CharacterLevels(generics.ListAPIView):
    """
    List Levels by character
    """
    serializer_class = serializers.CharacterLevelsSerializer
    queryset = models.CharacterLevels.objects.all()


class CharacterSkills(generics.ListAPIView):
    """
    List Skills by character
    """
    serializer_class = serializers.CharacterSkillsSerializer
    queryset = models.CharacterSkillProficiencies.objects.all()


class CharacterSavingThrows(generics.ListAPIView):
    """
    List SavingThrows by character
    """
    serializer_class = serializers.CharacterSavingThrowsSerializer
    queryset = models.CharacterSavingThrows.objects.all()


class CharacterSpells(generics.ListAPIView):
    """
    List Spells by character
    """
    serializer_class = serializers.CharacterSpellsSerializer
    queryset = models.CharacterSpells.objects.all()


class CharacterLanguages(generics.ListAPIView):
    """
    List Languages by character
    """
    serializer_class = serializers.CharacterLanguagesSerializer
    queryset = models.CharacterLanguages.objects.all()


class CharacterSubclass(generics.ListAPIView):
    """
    List SubclassCharacterSubclass by character
    """
    serializer_class = serializers.CharacterSubclassSerializer
    queryset = models.CharacterSubclass.objects.all()
    

class CharacterDetails(generics.RetrieveAPIView):
    """
    Retrieve the character details
    """
    serializer_class = serializers.CharacterSerializer
    queryset = models.CharacterDetails.objects.all()


class MyCharacters(generics.ListAPIView):
    """
    List all characters per user
    """
    serializer_class = serializers.CharacterSerializer
    queryset = models.CharacterDetails.objects.all()
    def get_queryset(self):
        current_user = self.request.user.id
        print(self.request.user.id, current_user)
        return models.CharacterDetails.objects.filter(user=current_user)



class CharacterCreation(generics.CreateAPIView):
    """
    Create required character field values
    """
    serializer_class = serializers.CharacterCreationSerializer
    queryset = models.CharacterDetails.objects.all()


class CharacterSubclassAdd(generics.CreateAPIView):
    """
    Add a subclass to an existing character
    """
    serializer_class = serializers.CharacterSubclassSerializer
    queryset = models.SubClassContentTable.objects.all()


class CharacterLevelAdd(generics.CreateAPIView):
    """
    Add a Level to an existing character
    """
    serializer_class = serializers.CharacterLevelSerializer
    queryset = models.CharacterLevels.objects.all()
    

class CharacterAttributesAdd(generics.CreateAPIView):
    """
    Add Attributes to an existing character
    """
    serializer_class = serializers.CharacterAttributesSerializer
    queryset = models.CharacterAttributes.objects.all()