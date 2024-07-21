from rest_framework import serializers
from .models import *

'''class mypage_info(serializers.ModelSerializer): # 마이 페이지에 표시할 정보
    class Meta:
        model = GoogleUser
        fields = ['nickname', 'banner', 'title', 'currentPoints', 'tier', 'google_id']
'''
class user_banner(serializers.ModelSerializer):
    class Meta:
        model = GoogleUser
        fields = ['banner']

class user_title(serializers.ModelSerializer):
    class Meta:
        model = GoogleUser
        fields = ['title']

class banner_info(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = ['name', 'image_url', 'price']

class mypage_info(serializers.ModelSerializer):
    class Meta:
        model = GoogleUser
        fields = ['user', 'google_id', 'avatar', 'nickname', 'title', 'currentPoints', 'levelUpPoints', 'week_score', 'banner', 'nextTier', 'levelUpPoints']

