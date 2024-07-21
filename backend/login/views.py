from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from google.oauth2 import id_token
from google.auth.transport import requests
from django.contrib.auth.models import User
from .models import GoogleUser
import json
from rest_framework import generics
from .serializers import mypage_info
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework import status
from .serializers import *


@csrf_exempt
def google_login(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        token = body.get('token')
        try:
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), "1001756684087-lud4hg59ncf0kql0m7v80sfd59ro2kv1.apps.googleusercontent.com")
            user_id = idinfo['sub']
            email = idinfo['email']
            avatar = idinfo.get('picture')

            user, created = User.objects.get_or_create(username=email, defaults={'email': email})
            google_user, created = GoogleUser.objects.get_or_create(user=user, defaults={'google_id': user_id, 'avatar': avatar})

            if not created:
                google_user.google_id = user_id
                google_user.avatar = avatar
                google_user.save()

            return JsonResponse({'status': 'success', 'user_id': user_id, 'email': email})
        except ValueError:
            return JsonResponse({'status': 'failed', 'message': 'Invalid token'})

class UserDetailView(generics.GenericAPIView):
    serializer_class = mypage_info
<<<<<<< HEAD
    def get(self, request, nickname, *args, **kwargs):
        task_time = get_object_or_404(GoogleUser, nickname=nickname)
        try:
            if task_time.currentPoints >= 500:
                task_time.tier = 'diamond'
                task_time.nextTier = 'max'
                task_time.levelUpPoints = 9999
            elif task_time.currentPoints >= 300:
                task_time.tier = 'platinum'
                task_time.nextTier = 'diamond'
                task_time.levelUpPoints = 500
            elif task_time.currentPoints >= 100:
                task_time.tier = 'gold'
                task_time.nextTier = 'platinum'
                task_time.levelUpPoints = 300
            elif task_time.currentPoints >= 40:
                task_time.tier = 'silver'
                task_time.nextTier = 'gold'
                task_time.levelUpPoints = 100
            elif task_time.currentPoints > 0:
                task_time.tier = 'bronze'
                task_time.nextTier = 'silver'
                task_time.levelUpPoints = 40
            else:
                task_time.tier = 'stone'
                task_time.nextTier = 'bronze'
                task_time.levelUpPoints = 0
            task_time.save()
            user_instance = GoogleUser.objects.get(nickname=nickname)
=======
    def get(self, request, google_id, *args, **kwargs):
        try:
            user_instance = GoogleUser.objects.get(google_id=google_id)
>>>>>>> b16ba821d7a034b84eac76a1160a544e36a66d57
        except GoogleUser.DoesNotExist:
            raise NotFound("user not found")
        serializers = self.get_serializer(user_instance)
        return Response(serializers.data)

# class Update_Banner(APIView):  # user DB의 google_id에 해당하는 이용자의 banner url 변경
#     def post(self, request):
#         google_id = request.data.get('google_id')
#         if not google_id:
#             return Response({'error': 'Google ID is required'}, status=status.HTTP_400_BAD_REQUEST)

#         try:
#             user = GoogleUser.objects.get(google_id=google_id)
#         except GoogleUser.DoesNotExist:
#             return Response({'error': 'GoogleUser not found'}, status=status.HTTP_404_NOT_FOUND)

#         serializer = user_banner(user, data=request.data, partial=True)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Update_Banner(APIView):  # user DB의 google_id에 해당하는 이용자의 banner url 변경
    def post(self, request):
        google_id = request.data.get('google_id')
        banner_id = request.data.get('banner_id')

        if not google_id:
            return Response({'error': 'Google ID is required'}, status=status.HTTP_400_BAD_REQUEST)
        if not banner_id:
            return Response({'error': 'Banner ID is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = GoogleUser.objects.get(google_id=google_id)
        except GoogleUser.DoesNotExist:
            return Response({'error': 'GoogleUser not found'}, status=status.HTTP_404_NOT_FOUND)

        try:
            banner = Banner.objects.get(id=banner_id)
        except Banner.DoesNotExist:
            return Response({'error': 'Banner not found'}, status=status.HTTP_404_NOT_FOUND)

        user.banner = banner.image_url
        user.save()

        serializer = user_banner(user)

        return Response(serializer.data, status=status.HTTP_200_OK)

class Update_Title(APIView):
    def put(self, request):
        google_id = request.data.get('google_id')
        if not google_id:
            return Response({'error': 'Google ID is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = GoogleUser.objects.get(google_id=google_id)
        except GoogleUser.DoesNotExist:
            return Response({'error': 'GoogleUser not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = user_title(user, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Banner_list(generics.ListAPIView): # 배너 리스트
    queryset = Banner.objects.all()
    serializer_class = banner_info



    