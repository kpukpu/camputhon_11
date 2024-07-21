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
    nickname = models.CharField(max_length=50, default='') # 닉네임
    total_score = models.IntegerField(default=0) # 누적 점수
    week_score = models.IntegerField(default=0) # 주별 점수
    banner = models.URLField(max_length=500, blank=True) # 브루스배너 이미지 url 주소
    title = models.TextField(default='') # 칭호
    tier = models.CharField(max_length=30, choices=TIER_CHOICES, default = 'stone')
    
    


    def save(self, *args, **kwargs):
        self.tier = self.calculate_tier()
        super().save(*args, **kwargs)

    def calculate_tier(self):
        # if self.total_score >= 1000:
        #     tier = 'ruby'
        if self.total_score >= 500:
            return 'diamond'
        elif self.total_score >= 300:
            return 'platinum'
        elif self.total_score >= 100:
            return 'gold'
        elif self.total_score >= 40:
            return 'silver'
        elif self.total_score > 0:
            return 'bronze'
        else:
            return 'stone'
