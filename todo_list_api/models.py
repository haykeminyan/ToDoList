from django.db import models

# Create your models here.


class TodoListModels(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=20, blank=True)
    description = models.CharField(max_length=200, null=True)
    is_done = models.BooleanField()
