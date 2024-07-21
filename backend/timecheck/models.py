# models.py
from django.db import models
from todolist.models import what_to_do
from user.models import user

class TaskTime(models.Model):
    task = models.ForeignKey(what_to_do, on_delete=models.CASCADE, related_name='times')
    total_score = models.ForeignKey(user, on_delete=models.CASCADE, related_name='times')
    start_time = models.DateTimeField(null=True, blank=True)
    total_time = models.DateTimeField(null=True, blank=True)
