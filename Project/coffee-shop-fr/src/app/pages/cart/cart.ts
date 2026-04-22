import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  orderNote = '';
  errorMessage = '';
  successMessage = '';

  constructor(
    public cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  increaseItem(productId: number): void {
    this.cartService.increaseQuantity(productId);
  }

  decreaseItem(productId: number): void {
    this.cartService.decreaseQuantity(productId);
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  placeOrder(): void {
    const items = this.cartService.getCart().map(item => ({
      product: item.product.id,
      quantity: item.quantity
    }));

    if (items.length === 0) {
      this.errorMessage = 'Your cart is empty';
      this.successMessage = '';
      return;
    }

    const orderData = {
      items: items,
      note: this.orderNote
    };

    this.orderService.placeOrder(orderData).subscribe({
      next: () => {
        this.successMessage = 'Order placed successfully';
        this.errorMessage = '';
        this.cartService.clearCart();
        this.orderNote = '';
        this.router.navigate(['/orders']);
      },
      error: () => {
        this.errorMessage = 'Failed to place order';
        this.successMessage = '';
      }
    });
  }
}