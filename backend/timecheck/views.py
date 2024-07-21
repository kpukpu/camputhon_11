from django.shortcuts import render, redirect, get_object_or_404
from django.utils import timezone
from .models import TaskTime
import time
from rest_framework.decorators import api_view

def start_task(request):
    _start_time = time.time()
    s_time = TaskTime(
        start_time = _start_time
    )
    s_time.save()

def EndTime(request):
    end_time = time.time()
    task = get_object_or_404(TaskTime, id=task)
    start_times = task.times.values_list('start_time', flat=True)
    s_time = TaskTime(
        total_time = end_time - start_times
    )
    s_time.save()