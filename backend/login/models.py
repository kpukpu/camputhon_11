from django.db import models
from django.contrib.auth.models import User

class GoogleUser(models.Model):
    TIER_CHOICES = [
        ('stone', 'Stone'),
        ('bronze', 'Bronze'),
        ('silver', 'Silver'),
        ('gold', 'Gold'),
        ('platinum', 'Platinum'),
        ('diamond', 'Diamond')
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    google_id = models.CharField(max_length=255, unique=True) # 중복 없으므로 차후 이용 가능
    avatar = models.URLField(max_length=200, null=True, blank=True)
    nickname = models.CharField(max_length=50, default='사용자') # 닉네임
    currentPoints = models.IntegerField(default=0) # 누적 점수
    week_score = models.IntegerField(default=0) # 주별 점수
    banner = models.URLField(max_length=500, blank=True) # 브루스배너 이미지 url 주소
    title = models.TextField(default='초보 개발자') # 칭호
    tier = models.CharField(max_length=30, choices=TIER_CHOICES, default = 'stone')
    nextTier = models.CharField(max_length=20, blank = True, default = 'Silver') # next tier
    levelUpPoints = models.IntegerField(default = 100)
    #silverPoint = models.IntegerField(default = 0)

class Banner(models.Model):
    name = models.CharField(max_length=255)
    image_url = models.URLField(max_length=500)
    price = models.IntegerField(default=0)