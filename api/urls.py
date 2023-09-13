from django.urls import path
app_name = 'api'

urlpatterns = [
    path('attributes/', views.AttributeList.as_view()),
]