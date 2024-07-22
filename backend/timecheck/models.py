# models.py
from django.db import models
from todolist.models import what_to_do
from login.models import GoogleUser

class TaskTime(models.Model):
    task = models.ForeignKey(what_to_do, on_delete=models.CASCADE, related_name='SIPAL')
    google_id = models.ForeignKey(GoogleUser, on_delete=models.CASCADE, related_name='SIIPAL')
    currentPoints = models.ForeignKey(GoogleUser, on_delete=models.CASCADE, related_name='sipDSFal', null=True, blank=True)
    silverPoint = models.ForeignKey(GoogleUser, on_delete=models.CASCADE, related_name='hahahaSDFDSha', null=True, blank=True)
