from django.db import models

# Create your models here.
class what_to_do(models.Model):
    nickname = models.ForeignKey(현우씨꺼 모델명, on_delete=models.CASCADE)
    hw_name = models.TextField(max_length=50)
    major = models.BooleanField(default = True) #참이면 전공, 거짓이면 교양