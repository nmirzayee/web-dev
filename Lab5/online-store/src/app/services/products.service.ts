import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { CATEGORIES } from '../data/categories.data';
import { PRODUCTS } from '../data/products.data';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private categories: Category[] = CATEGORIES;
  private products: Product[] = PRODUCTS;

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  likeProduct(productId: number): void {
    const p = this.products.find(x => x.id === productId);
    if (p) p.likes += 1;
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}