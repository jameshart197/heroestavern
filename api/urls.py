from django.urls import path
from api import views
app_name = 'api'

urlpatterns = [
    path('attributes/', views.AttributeList.as_view()),
    path('skills/', views.SkillsList.as_view()),
    path('races/', views.RaceList.as_view()),
    path('subraces/', views.SubRaceList.as_view()),
    path('spells/', views.SpellsList.as_view()),
    path('classes/', views.ClassList.as_view()),
    path('subclasses/', views.SubClassList.as_view()),
]