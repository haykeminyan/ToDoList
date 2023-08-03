from django.contrib.auth.models import User
from rest_framework import filters, generics
from rest_framework.response import Response

from todo_list_api.constants import ORDERING_FIELDS
from todo_list_api.filters import SearchResultsSet, StandardResultsSetPagination
from todo_list_api.models import Task
from todo_list_api.serializers import TodoListSerializer, UserSerializer


class TodoList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TodoListSerializer
    filter_backends = [filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ORDERING_FIELDS
    search_fields = SearchResultsSet.search_fields
    pagination_class = StandardResultsSetPagination

    def get(self, request, *args, **kwargs):
        queryset = Task.objects.all()
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(queryset, request)
        return Response(self.list(result_page, *args, **kwargs).data['results'])


class TodoListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TodoListSerializer


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
