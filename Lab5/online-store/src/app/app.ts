import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductsService } from './services/products.service';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.categories = this.productsService.getCategories();
  }

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
    this.selectedProducts = this.productsService.getProductsByCategory(id);
  }

  onLike(productId: number): void {
    this.productsService.likeProduct(productId);
    this.refreshSelected();
  }

  onDelete(productId: number): void {
    this.productsService.deleteProduct(productId);
    this.refreshSelected();
  }

  private refreshSelected(): void {
    if (this.selectedCategoryId == null) return;
    this.selectedProducts = this.productsService.getProductsByCategory(this.selectedCategoryId);
  }
}