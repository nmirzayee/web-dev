from django.urls import path
from .views import login_view, logout_view, ProductListCreateAPIView, ProductDetailAPIView, OrderListCreateAPIView

urlpatterns = [
    path('login/', login_view),
    path('logout/', logout_view),
    path('products/', ProductListCreateAPIView.as_view()),
    path('products/<int:pk>/', ProductDetailAPIView.as_view()),
    path('orders/', OrderListCreateAPIView.as_view()),
]