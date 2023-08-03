from django.shortcuts import render
from rest_framework import generics

from todo_list_api.models import TodoListModels
from todo_list_api.serializers import TodoListSerializer

# Create your views here.


class TodoList(generics.ListCreateAPIView):
    queryset = TodoListModels.objects.all()
    serializer_class = TodoListSerializer


class TodoListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TodoListModels.objects.all()
    serializer_class = TodoListSerializer
