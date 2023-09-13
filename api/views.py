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
