from django.urls import path
from .views import resist_to_do

urlpatterns = [
    path('todolist/', resist_to_do, name = resist_to_do),
]