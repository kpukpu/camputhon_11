from django.db import models
from django.contrib.auth.models import User

class GoogleUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    google_id = models.CharField(max_length=255, unique=True)
    avatar = models.URLField(max_length=200, null=True, blank=True)