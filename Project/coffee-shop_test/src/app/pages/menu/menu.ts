import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  products: Product[] = [];
  isLoading = false;
  errorMessage = '';

  message = '';
  showToast = false;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;

    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.errorMessage = '';
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load products';
        this.isLoading = false;
      }
    });
  }

  addToCart(product: Product): void {
    const confirmAdd = confirm(`Add ${product.name} to cart?`);

    if (!confirmAdd) {
      return;
    }

    this.cartService.addToCart(product);
    this.showMessage(`${product.name} added to cart`);
  }

  showMessage(msg: string): void {
    this.message = msg;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }
}