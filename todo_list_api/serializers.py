from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.serializers import ValidationError

from todo_list_api.models import Task


class TodoListSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Task
        fields = ['id', 'owner', 'username', 'title', 'description', 'is_done']

    def validate(self, data):
        errors = []
        if not data.get('username'):
            errors.append('Please add username')
        if not data.get('title'):
            errors.append('Please add title')

        if errors:
            raise ValidationError(errors)
        return data


class UserSerializer(serializers.ModelSerializer):
    tasks = serializers.PrimaryKeyRelatedField(many=True, queryset=Task.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'tasks']
