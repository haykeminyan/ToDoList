from rest_framework import serializers

from todo_list_api.models import TodoListModels


class TodoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoListModels
        fields = '__all__'
