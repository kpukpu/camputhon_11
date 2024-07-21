from django.db import models
from django.contrib.auth.models import User

class GoogleUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    google_id = models.CharField(max_length=255, unique=True) # 중복 없으므로 차후 이용 가능
    avatar = models.URLField(max_length=200, null=True, blank=True)
    nickname = models.CharField(max_length=50, default='') # 닉네임
    total_score = models.IntegerField(default=0) # 누적 점수
    week_score = models.IntegerField(default=0) # 주별 점수
    banner = models.URLField(max_length=500, blank=True) # 브루스배너 이미지 url 주소
    title = models.TextField(default='') # 칭호