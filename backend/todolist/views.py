from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import what_to_do
import json
from user.models import user

# Create your views here.

@api_view(['POST'])
def resist_to_do(request):
    data = json.loads(request.body)
    nickname_id = data.get('nickname_id')
    _hw_name = data.get('hw_name')
    _major = data.get('major')

    try:
<<<<<<< HEAD
        nickname =현우씨꺼모델명.objects.get(id=nickname_id)
=======
        nickname = user.objects.get(id=nickname_id)
>>>>>>> 4ced7e8bcf802630a1347cfc37fe2ded960e1833
        new_resist = what_to_do(
            nickname=nickname,
            hw_name=_hw_name,
            major=_major
        )
        new_resist.save()
        return Response({'success': True, 'message': 'ToDo saved successfully.'})
    except Exception as e:
        return Response({'success': False, 'message': str(e)}, status=400)