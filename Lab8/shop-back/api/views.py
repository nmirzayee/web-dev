from django.shortcuts import render
from .models import Product, Category
from django.http import JsonResponse
# Create your views here.
# these functions are called views
# A view takes a request from the browser and returns a response
# Here, our response is JSON
# action, request handler

def product_to_dict(product):
  return {
    'id': product.id,
    'name': product.name,
    'price': product.price,
    'description': product.description,
    'count': product.count,
    'is_active': product.is_active,
    'category': product.category.id,
  }

def category_to_dict(category):
  return {
    'id': category.id,
    'name': category.name
  }

def product_list(request):
  products = Product.objects.all()
  data = [product_to_dict(product) for product in products]
  return JsonResponse(data, safe=False)

def category_list(request):
  categories = Category.objects.all()
  data = [category_to_dict(category) for category in categories]
  return JsonResponse(data, safe=False)


def product_details(request, id):
  try:
    product = Product.objects.get(id=id)
    data = product_to_dict(product)
    return JsonResponse(data)
  except Product.DoesNotExist:
    return JsonResponse({'error': 'Product not found'}, status=404)

def category_details(request, id):
  try:
    category = Category.objects.get(id=id)
    data = category_to_dict(category)
    return JsonResponse(data)
  except Category.DoesNotExist:
    return JsonResponse({'error': 'Category not found'}, status=404)
  
def products_by_category(request, id):
  try:
    category = Category.objects.get(id=id)
    products = category.products.all()
    data = [product_to_dict(product) for product in products]
    return JsonResponse(data, safe=False)
  except Category.DoesNotExist:
    return JsonResponse({'error': 'Category not found'}, status=404)