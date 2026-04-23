from django.urls import path
from .views import login_view, logout_view, register_view, user_view, ProductListCreateAPIView, ProductDetailAPIView, OrderListCreateAPIView, CategoryListAPIView, ProductsByCategoryAPIView

urlpatterns = [
    path('login/', login_view),
    path('logout/', logout_view),
    path('register/', register_view),
    path('user/', user_view),
    path('products/', ProductListCreateAPIView.as_view()),
    path('products/<int:pk>/', ProductDetailAPIView.as_view()),
    path('orders/', OrderListCreateAPIView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/products/', ProductsByCategoryAPIView.as_view()),
]