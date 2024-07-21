from django.db import models

# Create your models here.
class user(models.Model):
    nickname = models.CharField(primary_key=True) # 닉네임
    total_score = models.IntegerField(default=0) # 누적 점수
    week_score = models.IntegerField() # 주별 점수

    class Meta:
        db_table = 'user'