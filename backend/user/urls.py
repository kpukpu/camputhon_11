from django.urls import path
from .views import *

urlpatterns = [
    path('mypage/', mark_mypage.as_view, name = 'mark_mypage'),
]