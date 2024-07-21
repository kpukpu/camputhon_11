from django.urls import path
from .views import google_login
from .views import *

urlpatterns = [
    path('google-login/', google_login),
    path('mypage/<str:nickname>/', UserDetailView.as_view(), name = 'user-detail'),
    path('update/', Update_Banner_Title.as_view(), name = 'update-banner-title'),
]
