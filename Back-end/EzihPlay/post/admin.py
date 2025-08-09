from django.contrib import admin
from .models import Post,Category,PostReview
# Register your models here.

admin.site.register(Post)
admin.site.register(PostReview)
admin.site.register(Category)
