from rest_framework import serializers

from uploader.models import Image
from utils.files import CONTENT_TYPE_JPG, CONTENT_TYPE_PNG, get_content_type


class ImageUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ["attachment_key", "file", "description", "uploaded_on"]
        read_only_fields = ["attachment_key", "uploaded_on"]
        extra_kwargs = {"file": {"write_only": True}}

    def validate_file(self, value):
        valid_content_types = [CONTENT_TYPE_JPG, CONTENT_TYPE_PNG]
        if value.content_type not in valid_content_types:
            raise serializers.ValidationError("Invalid or corrupted image.")
        return value


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ["url", "description", "uploaded_on"]
        read_only_fields = ["url", "attachment_key", "uploaded_on"]

    def create(self, validated_data):
        raise NotImplementedError("Use ImageUploadSerializer to create images.")
