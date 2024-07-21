from django.urls import path
from .views import *

urlpatterns = [
    path('mypage/<str:nickname>/', UserDetailView.as_view(), name = 'user-detail'),
]