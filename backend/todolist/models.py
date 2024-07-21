from django.db import models
from login.models import GoogleUser

# Create your models here.
class what_to_do(models.Model):
    nickname = models.ForeignKey(GoogleUser, on_delete=models.CASCADE)
    hw_name = models.TextField(max_length=50) # 할 일 이름
    major = models.BooleanField(default = True) # 참이면 전공, 거짓이면 교양
