from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),
    path('api/', include ('api.urls', namespace='api')),
    path('api/dj-rest-auth/', include('dj_rest_auth.urls')),
    path(
        'api/dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')
    ),
]

handler404 = TemplateView.as_view(template_name='index.html')

# urlpatterns = [
#     path('', TemplateView.as_view(template_name='index.html')),
#     path('admin/', admin.site.urls),
#     path('api/', include ('api.urls', namespace='api')),
#     path('dj-rest-auth/', include('dj_rest_auth.urls')),
#     path(
#         'dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')
#     ),
# ]