import uuid
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User


class Category(models.Model):
    title = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True,blank=True, null=True)
    
    def __str__(self):
        return  f'{self.title}'

class Post(models.Model):
    MEDIA_TYPE_CHOICES = [
        ('youtube', 'YouTube'),
        ('spotify', 'Spotify'),
        ('other', 'Other'),
    ]

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="posts"
    )
    media_type = models.CharField(
        max_length=20,
        choices=MEDIA_TYPE_CHOICES,
        default='youtube'
    )
    media_url = models.URLField(max_length=500)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    category = models.ForeignKey(
         Category,
         on_delete=models.SET_NULL,
        blank=True,
        null=True
    )
    thumbnail_url = models.URLField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['media_type']),
            models.Index(fields=['title']),
        ]

    def __str__(self):
        return f"{self.title} ({self.media_type})"
    
class PostReview(models.Model):
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        related_name='reviews'
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='post_reviews'
    )
    rating = models.PositiveSmallIntegerField(
        default=1,
        help_text='Rating from 1 to 5',
    )
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('post', 'user')
        ordering = ['-created_at']

    def __str__(self):
        return f'Review by {self.user} for {self.post} - {self.rating} stars'
    

class userInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="userInfo")  
    bio = models.TextField(blank=True, null=True)  
    profile_picture = models.ImageField(blank=True, null=True, upload_to='profile_pictures/')  
    joined_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False,unique=True)
    is_verified = models.BooleanField(blank=True, null=True, default=False)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    location = models.TextField(blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], blank=True, null=True)
    preferred_language = models.CharField(max_length=50, blank=True, null=True)
    
    class Meta:
        verbose_name = "User Information"
        verbose_name_plural = "User Information"

    def __str__(self):
        return f"{self.user.username} - {self.uuid}"
    def is_superuser(self):
        return self.user.is_superuser

