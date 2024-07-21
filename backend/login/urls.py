# backend/login/urls.py
from django.urls import path
from .views import google_login, UserDetailView, UpdateBanner, Update_Title, BannerList, UpdateUserBanner

urlpatterns = [
    path('google-login/', google_login),
    path('mypage/<str:google_id>/', UserDetailView.as_view(), name='user-detail'),
    path('update_banner/<int:id>/', UpdateBanner.as_view(), name='update-banner'),
    path('update_title/', Update_Title.as_view(), name='update-title'),
    path('banner_list/', BannerList.as_view(), name='banner-list'),
    path('update_user_banner/<str:google_id>/', UpdateUserBanner.as_view(), name='update-user-banner'),
]
