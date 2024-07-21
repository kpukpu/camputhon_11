from rest_framework import serializers
from .models import *

class mypage_info(serializers.ModelSerializer): # 마이 페이지에 표시할 정보
    class Meta:
        model = user
        fields = ['nickname', 'banner', 'title', 'total_score'] # 친구 정보 추가해야 함