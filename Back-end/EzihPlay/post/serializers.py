from rest_framework import serializers
from .models import Post
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError
from rest_framework.validators import UniqueValidator
from rest_framework import serializers
from .models import Post,PostReview,userInfo
import re
from django.contrib.auth.models import User


class userInfoSerializer(serializers.ModelSerializer):
    usermore = serializers.SerializerMethodField()
    is_superuser = serializers.SerializerMethodField()
    class Meta:
        model = userInfo
        fields = [
            "bio",
            "is_superuser",
            "id",
            "is_verified",
            "joined_at",
            "profile_picture",
            "user",
            "usermore",
            "uuid",
            "phone_number",
            "location",
            "date_of_birth",
            "gender",
            "preferred_language"
        ]
    def get_is_superuser(self,obj):
        return obj.is_superuser()
    def get_usermore(self, obj):
        return {
            "email": obj.user.email,
            "first_name": obj.user.first_name,
            "last_name": obj.user.last_name,
            "username": obj.user.username,
        }

class PostSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')  
    category = serializers.SerializerMethodField()
    user_info = serializers.SerializerMethodField()
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
             "user_info",
        ]
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']

    def get_category(self, obj):
        if hasattr(obj, 'category') and obj.category:
            return obj.category.title
        return obj.title or ""

    
    def get_user_info(self, obj):
        username = obj.user.username
        id = obj.user.id
        email = obj.user.email
        user_info = getattr(obj.user, 'userInfo', None)  # Get userInfo object safely
        user_data = {
                "bio": user_info.bio if user_info and user_info.bio else "No bio available",
                "email": email,
                "id": id,
                "profile_picture": user_info.profile_picture.url if user_info and user_info.profile_picture else None,
                "username": username,
                "uuid": user_info.uuid if user_info and user_info.uuid else "Not Loger Have UUID",
                "phone_number": user_info.phone_number if user_info and user_info.phone_number else "Not Provided",
                "location": user_info.location if user_info and user_info.location else "Unknown",
                "date_of_birth": user_info.date_of_birth.isoformat() if user_info and user_info.date_of_birth else "Not Set",
                "gender": user_info.gender if user_info and user_info.gender else "Not Specified",
                "preferred_language": user_info.preferred_language if user_info and user_info.preferred_language else "en"
            }

        return user_data
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
    user_info = serializers.SerializerMethodField()

    class Meta:
        model = PostReview
        fields = [
            'id',
            'post',
            'user',
            'rating',
            'comment',
            'user_info',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']

    def get_user_info(self, obj):
        username = obj.user.username
        user_id = obj.user.id
        email = obj.user.email
        user_info = getattr(obj.user, 'userInfo', None)  # Get userInfo object safely

        return {
            "bio": user_info.bio if user_info and user_info.bio else "No bio available",
            "email": email,
            "id": user_id,
            "username": username,
            "uuid": user_info.uuid if user_info and user_info.uuid else "No UUID",
            "phone_number": user_info.phone_number if user_info and user_info.phone_number else "Not Provided",
            "location": user_info.location if user_info and user_info.location else "Unknown",
        }


    def validate_rating(self, value):
        if not (1 <= value <= 5):
            raise serializers.ValidationError("Rating must be between 1 and 5")
        return value
    