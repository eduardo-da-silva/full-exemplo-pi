from rest_framework import serializers

from uploader.models import Document
from utils.files import CONTENT_TYPE_PDF, get_content_type


class DocumentUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ["attachment_key", "file", "description", "uploaded_on"]
        read_only_fields = ["attachment_key", "uploaded_on"]
        extra_kwargs = {"file": {"write_only": True}}

    def validate_file(self, value):
        valid_content_types = [CONTENT_TYPE_PDF]
        if get_content_type(value) not in valid_content_types:
            raise serializers.ValidationError("Invalid or corrupted document.")
        return value


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ["url", "description", "uploaded_on", "attachment_key", "public_id"]
        read_only_fields = ["url", "attachment_key", "uploaded_on"]

    def create(self, validated_data):
        raise NotImplementedError(
            "Use DocumentUploadSerializer to create document files."
        )
