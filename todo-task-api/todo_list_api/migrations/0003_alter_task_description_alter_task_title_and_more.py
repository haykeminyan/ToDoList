# Generated by Django 4.2.4 on 2023-08-04 23:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo_list_api', '0002_alter_task_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='description',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='task',
            name='title',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='task',
            name='username',
            field=models.CharField(max_length=10),
        ),
    ]
