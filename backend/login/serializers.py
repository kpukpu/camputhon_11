from rest_framework import serializers
from .models import *

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

