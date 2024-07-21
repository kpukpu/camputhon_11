from django.db import models
#from django.utils import timezone

class DailyMission(models.Model):  #일간 미션
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class WeeklyMission(models.Model): #주간 미션
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title
