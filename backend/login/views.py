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
    def get(self, request, nickname, *args, **kwargs):
        try:
            user_instance = GoogleUser.objects.get(nickname=nickname)
        except GoogleUser.DoesNotExist:
            raise NotFound("user not found")
        serializers = self.get_serializer(user_instance)
        return Response(serializers.data)