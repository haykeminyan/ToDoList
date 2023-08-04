# Generated by Django 4.2.4 on 2023-08-03 21:43

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(blank=True, max_length=10, null=True)),
                ('title', models.CharField(blank=True, max_length=20)),
                ('description', models.CharField(max_length=200, null=True)),
                ('is_done', models.BooleanField()),
                (
                    'owner',
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='tasks',
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]