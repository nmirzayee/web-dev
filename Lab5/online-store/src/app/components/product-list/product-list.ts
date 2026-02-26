import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];

  // Bubble up to App so global data stays consistent
  @Output() likeProduct = new EventEmitter<number>();
  @Output() deleteProduct = new EventEmitter<number>();

  displayed: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.displayed = [...this.products];
    }
  }

  onLike(id: number): void {
    this.likeProduct.emit(id);
    // UI updates immediately because product references are shared,
    // and App will refresh the list too.
  }

  onDelete(id: number): void {
    // remove immediately from current view
    this.displayed = this.displayed.filter(p => p.id !== id);
    this.deleteProduct.emit(id);
  }
}