from django.shortcuts import render, redirect, get_object_or_404
from django.utils import timezone
from .models import TaskTime
import time
from rest_framework.decorators import api_view
from django.http import HttpResponse
from rest_framework.response import Response

def start_task(request, task_id):
    _start_time = time.time()
    task_time = get_object_or_404(TaskTime, id=task_id)
    task_time.start_time = _start_time
    task_time.save()

def EndTime(request, task_time_id):
    _end_time = time.time()
    task_time = get_object_or_404(TaskTime, id=task_time_id)
    
    if task_time.start_time is not None:
        task_time.end_time = _end_time
        task_time.total_time = _end_time - task_time.start_time
        # Accure 모델 수정
        accure = task_time.total_time / 60
        if major == True: #나중에 수정 요함
            if accure < 60:
                task_time.total_score += 2
            elif accure > 60 & accure < 120:
                task_time.total_score += 3
            elif accure > 120 and accure < 180:
                task_time.total_score += 4
            elif accure > 180 and accure < 240:
                task_time.total_score += 5
        elif major == False: 
            if accure < 60:
                task_time.total_score += 1
            elif accure > 60 & accure < 120:
                task_time.total_score += 2
            elif accure > 120 and accure < 180:
                task_time.total_score += 3
            elif accure > 180 and accure < 240:
                task_time.total_score += 4
        task_time.save()
        return HttpResponse("Task ended successfully.")
    else:
        return HttpResponse("Task start time not set.", status=400)
    
def tier(request, task_time_id) :
     # 점수 인스턴스 가져오기 또는 생성하기
        task_time = get_object_or_404(TaskTime, id=task_time_id)
        _total_score = task_time.total_score
        
        if _total_score >= 1000:
            tier = 'ruby'
        elif _total_score >= 500:
            tier = 'diamond'
        elif _total_score >= 300:
            tier = 'platinum'
        elif _total_score >= 100:
            tier = 'gold'
        elif _total_score >= 40:
            tier = 'silver'
        else:
            tier = 'bronze'

        task_time.tier = tier
        task_time.save()
        
        return Response({'success': True, 'tier': tier})
        


