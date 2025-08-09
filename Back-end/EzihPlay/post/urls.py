from django.urls import path, include 
from rest_framework.routers import DefaultRouter
from .views import PostViewSet,UserCreateViewtoUrl,PostReviewViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')
router.register(r'postsreview', PostReviewViewSet, basename='post-review')

urlpatterns = [
    path('', include(router.urls)),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
     path("token/",TokenObtainPairView.as_view(), name='email_login'),
      path("register/", UserCreateViewtoUrl, name="register"),
]
