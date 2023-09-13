from rest_framework import generics
from charshare.models import AttributeContentTable
from .serializers import AttributeSerializer

class AttributeList(generics.ListAPIView):
    """
    List base attributes
    """
    serializer_class = AttributeSerializer
    queryset = AttributeContentTable.objects.all()
