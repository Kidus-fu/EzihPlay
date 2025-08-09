from rest_framework import serializers
from .models import Post
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError
from rest_framework.validators import UniqueValidator
from rest_framework import serializers
from .models import Post,PostReview
import re
from django.contrib.auth.models import User


class PostSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')  
    category = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'id',
            'user',
            'media_type',
            'media_url',
            'title',
            'description',
            'thumbnail_url',
            'created_at',
            'category',
            'updated_at',
        ]
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']

    def get_category(self, obj):
        return f'{obj.category.title}'
class UserCreateSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[
            UniqueValidator(queryset=User.objects.all(), message="Email already exists.")
        ]
    )

    username = serializers.CharField(
        required=True,
        min_length=4,
        validators=[
            UniqueValidator(queryset=User.objects.all(), message="Username already taken.")
        ]
    )

    first_name = serializers.CharField(
        required=True,
        min_length=2,
        max_length=50,
        error_messages={
            "required": "First name is required.",
            "min_length": "First name must be at least 2 characters.",
            "max_length": "First name must be less than 50 characters.",
        }
    )

    last_name = serializers.CharField(
        required=True,
        min_length=2,
        max_length=50,
        error_messages={
            "required": "Last name is required.",
            "min_length": "Last name must be at least 2 characters.",
            "max_length": "Last name must be less than 50 characters.",
        }
    )

    password = serializers.CharField(
        write_only=True,
        error_messages={
            "required": "Password is required.",
        }
    )

    class Meta:
        model = User
        fields = ["email", "username", "first_name", "last_name", "password"]

    def validate_first_name(self, value):
        if not re.match(r'^[\w\u1200-\u137F\u1380-\u139F\u2D80-\u2DDF]+$', value):
            raise serializers.ValidationError("First name must contain only letters.")
        return value

    def validate_last_name(self, value):
        if not re.match(r'^[\w\u1200-\u137F\u1380-\u139F\u2D80-\u2DDF]+$', value):
            raise serializers.ValidationError("Last name must contain only letters.")
        return value

    def validate(self, data):
        try:
            validate_password(data["password"])
        except DjangoValidationError as e:
            raise serializers.ValidationError({"password": e.messages})
        return data

    def create(self, validated_data):
        user = User(
            username=validated_data["username"],
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
        )
        user.set_password(validated_data["password"])
        user.full_clean()  # extra layer of safety
        user.save()
        return user
    
class PostReviewSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')  # Show username

    class Meta:
        model = PostReview
        fields = [
            'id',
            'post',
            'user',
            'rating',
            'comment',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']

    def validate_rating(self, value):
        if not (1 <= value <= 5):
            raise serializers.ValidationError("Rating must be between 1 and 5")
        return value
