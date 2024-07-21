from rest_framework import serializers
from .models import *

class mypage_info(serializers.ModelSerializer): # 마이 페이지에 표시할 정보
    class Meta:
        model = GoogleUser
        fields = ['nickname', 'banner', 'title', 'total_score', 'tier', 'google_id']

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
        model = GoogleUser
        fields = ['name', 'image_url', 'price']

class GoogleUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoogleUser
<<<<<<< HEAD
        fields = ['user', 'google_id', 'avatar', 'nickname', 'title', 'currentPoints', 'levelUpPoints', 'total_score', 'week_score', 'banner', 'nextTier', 'levelUpPoints']
=======
        fields = ['user', 'google_id', 'avatar', 'nickname', 'title', 'currentPoints', 'levelUpPoints', 'total_score', 'week_score', 'banner', 'nextTier', 'levelUpPoints']
>>>>>>> 2c6546892092a07f00ca389b534a1176119b7e28
