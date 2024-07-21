# models.py
from django.db import models
from todolist.models import what_to_do
from login.models import GoogleUser

class TaskTime(models.Model):
    task = models.ForeignKey(what_to_do, on_delete=models.CASCADE, related_name='times')
    currentPoints = models.ForeignKey(GoogleUser, on_delete=models.CASCADE, related_name='times', null=True, blank=True)
    major = models.ForeignKey(what_to_do, on_delete=models.CASCADE, null = True)
    start_time = models.DateTimeField(null=True, blank=True)
    total_time = models.DateTimeField(null=True, blank=True)
