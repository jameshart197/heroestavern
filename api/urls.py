from django.urls import path
from api import views
app_name = 'api'

urlpatterns = [
    path('attributes/', views.AttributeList.as_view()),
    path('skills/', views.SkillsList.as_view()),
]