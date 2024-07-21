from rest_framework import serializers
from .models import DailyMission, WeeklyMission

class DailyMissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyMission
        fields = ['id', 'title', 'description', 'created_at']

class WeeklyMissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeeklyMission
        fields = ['id', 'title', 'description', 'created_at', 'week_number']
