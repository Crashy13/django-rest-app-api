from django.urls import path, include
from . import views

app_name = 'api_v1'

urlpatterns = [
    path('menu/', include('menu.urls', namespace='menu')),
    path('order/', include('order.urls', namespace='order'))
]
