from django.urls import path
from .views import ItemListAPIView

app_name = 'items'

urlpatterns = [
    path('', ItemListAPIView.as_view(), name="item_list")
]
