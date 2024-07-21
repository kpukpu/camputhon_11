from django.db import models

# Create your models here.
class user(models.Model):
    nickname = models.CharField(max_length=50, primary_key=True) # 닉네임
    total_score = models.IntegerField(default=0) # 누적 점수
    week_score = models.IntegerField(default=0) # 주별 점수
    banner = models.URLField(max_length=500, blank=True) # 브루스배너 이미지 url 주소
    title = models.TextField(default='') # 칭호

    class Meta:
        db_table = 'user'