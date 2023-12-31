from django.db import models

# Create your models here.


class Task(models.Model):
    id = models.AutoField(primary_key=True)
    owner = models.ForeignKey(
        'auth.User',
        related_name='tasks',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
    username = models.CharField(max_length=10)
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=200)
    is_done = models.BooleanField(default=False)

    def __str__(self) -> str:
        """Return model string representation."""
        return f'Record made by {self.username}'
