from rest_framework import serializers
from charshare.models import AttributeContentTable


class AttributeSerializer(serializers.ModelSerializer):
    """
    Serializer for the AttributeContentTable model
    """
    class Meta:
        model = AttributeContentTable
        fields = [
            'name', 'shortname', 'full_description'
        ]