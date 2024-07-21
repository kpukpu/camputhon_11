from rest_framework import serializers
from .models import *

class mypage_info(serializers.ModelSerializer): # 마이 페이지에 표시할 정보
    class Meta:
        model = GoogleUser
        fields = ['nickname', 'banner', 'title', 'total_score', 'tier', 'google_id']

class user_banner_title(serializers.ModelSerializer):
    class Meta:
        model = GoogleUser
        fields = ['banner', 'title']