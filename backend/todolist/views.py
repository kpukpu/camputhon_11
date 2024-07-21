from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import what_to_do
import json
from login.models import GoogleUser

# Create your views here.



@api_view(['POST'])
def resist_to_do(request):
    data = json.loads(request.body)
    
    nickname_id = data.get('nickname')
    _task = data.get('task')
    _major = data.get('major')
    _deadline = data.get('deadline')
    try:
        nickname = GoogleUser.objects.get(id=nickname_id) # nickname_id 써도 되나?
        new_resist = what_to_do(
            nickname=nickname,
            task=_task,
            major=_major,
            deadline=_deadline
        )
        new_resist.save()
        return Response({'success': True, 'message': 'ToDo saved successfully.'})
    except Exception as e:
        return Response({'success': False, 'message': str(e)}, status=400)