from django.shortcuts import render
from rest_framework import viewsets, mixins, permissions
from .models import Post,PostReview,userInfo
from .serializers import PostSerializer,UserCreateSerializer,PostReviewSerializer,userInfoSerializer
from rest_framework.views import APIView
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework import generics
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

class userinfoView(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.CreateModelMixin,
    mixins.DestroyModelMixin,
    generics.GenericAPIView
    ):
    """
    Example to a JSOn format
    {
        "user": null,
        "bio": "",
        "profile_picture": null
        .......
    }
    """
    serializer_class = userInfoSerializer
    lookup_field = "uuid"
    queryset = userInfo.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, *args, **kwargs):
        uuid = kwargs.get("uuid", None)
        if uuid is None:  
            return self.list(request, *args, **kwargs)
        return self.retrieve(request, *args, **kwargs)
    def post(self, request, *args, **kwargs):
        request.data['user'] = request.user.id 
        return super().create(request, *args, **kwargs)
    def put(self, request, *args, **kwargs):
        request.data['user'] = request.user.id 
        return super().update(request, *args, **kwargs)
    def patch(self, request, *args, **kwargs):
        request.data['user'] = request.user.id 
        return super().update(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs):
        super().destroy(request, *args, **kwargs)
        return Response({"message": "User deleted successfully"}, status=204)

userinfoViewtoUrl = userinfoView.as_view()