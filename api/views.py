from rest_framework import generics
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