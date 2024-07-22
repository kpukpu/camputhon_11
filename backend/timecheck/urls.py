from django.urls import path
from .views import start_task, _get_time

urlpatterns = [
    path('get_time/', _get_time, name = _get_time),
    #path('get_t_time/', EndTime, name = EndTime),
]