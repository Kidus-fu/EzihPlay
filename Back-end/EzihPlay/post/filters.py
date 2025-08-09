import django_filters
from .models import Post

class PostFilter(django_filters.FilterSet):
    category_title = django_filters.CharFilter(field_name='category__title', lookup_expr='icontains')

    class Meta:
        model = Post
        fields = ['category_title']