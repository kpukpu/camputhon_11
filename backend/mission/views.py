# mission/views.py

from rest_framework import generics
from .models import DailyMission, WeeklyMission
from .serializers import DailyMissionSerializer, WeeklyMissionSerializer

class DailyMissionListCreate(generics.ListCreateAPIView):
    queryset = DailyMission.objects.all()
    serializer_class = DailyMissionSerializer

class WeeklyMissionListCreate(generics.ListCreateAPIView):
    queryset = WeeklyMission.objects.all()
    serializer_class = WeeklyMissionSerializer
