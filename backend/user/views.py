from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import user
from .serializers import *
from rest_framework import generics
from rest_framework.exceptions import NotFound

# Create your views here.
class UserDetailView(generics.GenericAPIView):
    serializer_class = mypage_info
    def get(self, request, nickname, *args, **kwargs):
        try:
            user_instance = user.objects.get(nickname=nickname)
        except user.DoesNotExist:
            raise NotFound("user not found")
        serializers = self.get_serializer(user_instance)
        return Response(serializers.data)