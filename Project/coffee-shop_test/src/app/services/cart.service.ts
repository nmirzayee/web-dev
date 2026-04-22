import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { product: Product; quantity: number }[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    const existing = this.cart.find(item => item.product.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  increaseQuantity(productId: number): void {
    const item = this.cart.find(item => item.product.id === productId);
    if (item) {
      item.quantity++;
    }
  }

  decreaseQuantity(productId: number): void {
    const item = this.cart.find(item => item.product.id === productId);

    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(productId);
      }
    }
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.product.id !== productId);
  }

  clearCart() {
    this.cart = [];
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
}