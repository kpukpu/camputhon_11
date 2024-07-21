from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from .models import user
from rest_framework import serializers
from .serializers import *


# Create your views here.

class mark_mypage(APIView):
    def get(self, request):
        current_user = request.user
        try:
            user_info = user.objects.get(nickname = current_user.nickname)
        except user.DoesNotExist:
            return Response({'error' : 'User not found'}, status=404)
        serializer = mypage_info(user_info)
        return Response(serializer.data)