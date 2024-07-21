from django.urls import path
from .views import DailyMissionListCreate, WeeklyMissionListCreate

urlpatterns = [
    path('daily/', DailyMissionListCreate.as_view(), name='daily_mission_list_create'),
    path('weekly/', WeeklyMissionListCreate.as_view(), name='weekly_mission_list_create'),
]
