from django.shortcuts import render
from rest_framework import generics

from todo_list_api.models import TodoListModels
from todo_list_api.serializers import TodoListSerializer, UserSerializer
from django.contrib.auth.models import User
# Create your views here.


class TodoList(generics.ListCreateAPIView):
    queryset = TodoListModels.objects.all()
    serializer_class = TodoListSerializer

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)


class TodoListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TodoListModels.objects.all()
    serializer_class = TodoListSerializer


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer