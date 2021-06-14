from django.urls import path

from .views import ItemListAPIView

urlpatterns = [
    path('', ItemListAPIView.as_view(), name="item_list")
]
