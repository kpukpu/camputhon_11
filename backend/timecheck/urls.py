from django.urls import path
from .views import start_task, EndTime

urlpatterns = [
    path('get_s_time/', start_task, name = start_task),
    path('get_t_time/', EndTime, name = EndTime),
]