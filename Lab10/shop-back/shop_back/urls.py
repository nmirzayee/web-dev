from django.contrib import admin
from api.views import home
from django.urls import path, include

urlpatterns = [
    path('', home,name='main home'),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]