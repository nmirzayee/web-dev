import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {

  // 🔥 existing
  products = signal<Product[]>([]);
  errorMessage = '';

  // 🔥 NEW
  categories = signal<any[]>([]);
  selectedCategory = signal<number | null>(null);

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories(); // 🔥 NEW
  }

  // 🔥 LOAD ALL PRODUCTS
  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => this.products.set(data),
      error: () => this.errorMessage = 'Failed to load products'
    });
  }

  // 🔥 LOAD CATEGORIES
  loadCategories(): void {
    this.productService.getCategories().subscribe({
      next: (data) => this.categories.set(data),
      error: () => console.log('Failed to load categories')
    });
  }

  // 🔥 FILTER PRODUCTS BY CATEGORY (API REQUEST)
  filterByCategory(categoryId: number): void {
    this.selectedCategory.set(categoryId);

    this.productService.getProductsByCategory(categoryId).subscribe({
      next: (data) => this.products.set(data),
      error: () => this.errorMessage = 'Failed to filter products'
    });
  }

  // 🔥 SHOW ALL PRODUCTS AGAIN
  showAll(): void {
    this.selectedCategory.set(null);
    this.loadProducts();
  }

  // 🔥 EXISTING
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart`);
  }
}