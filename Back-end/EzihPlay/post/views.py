from django.shortcuts import render
from rest_framework import viewsets, mixins, permissions
from .models import Post,PostReview
from .serializers import PostSerializer,UserCreateSerializer,PostReviewSerializer
from rest_framework.views import APIView
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.response import Response
from .filters import PostFilter
# Create your views here.

class PostViewSet(mixins.ListModelMixin,
                      mixins.RetrieveModelMixin,
                      mixins.CreateModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.DestroyModelMixin,
                      viewsets.GenericViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter,DjangoFilterBackend]
    filterset_class = PostFilter
    search_fields = ['title', 'description']
    lookup_field = "title"

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class PostReviewViewSet(mixins.ListModelMixin,
                      mixins.RetrieveModelMixin,
                      mixins.CreateModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.DestroyModelMixin,
                      viewsets.GenericViewSet):
    queryset = PostReview.objects.all().order_by('-created_at')
    serializer_class = PostReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    lookup_field = "title"
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UserCreateView(APIView):
    def post(self, request):
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User created"}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
UserCreateViewtoUrl = UserCreateView.as_view()