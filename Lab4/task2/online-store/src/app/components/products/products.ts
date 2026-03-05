import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { PRODUCTS } from '../../data/products.data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent {
  products: Product[] = PRODUCTS;

  // Per-product selected image index (for inline gallery)
  selectedIndex: Record<number, number> = {};

  // Modal gallery state
  isModalOpen = false;
  modalProduct: Product | null = null;
  modalIndex = 0;

  getSelectedImage(product: Product): string {
    const idx = this.selectedIndex[product.id] ?? 0;
    return product.images[idx] || product.image;
  }

  selectImage(product: Product, index: number): void {
    this.selectedIndex[product.id] = index;
  }

  openModal(product: Product, index?: number): void {
    this.modalProduct = product;
    const current = index ?? (this.selectedIndex[product.id] ?? 0);
    this.modalIndex = this.clampIndex(current, product.images.length);
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.modalProduct = null;
    this.modalIndex = 0;
    document.body.style.overflow = '';
  }

  prevModal(): void {
    if (!this.modalProduct) return;
    const n = this.modalProduct.images.length;
    this.modalIndex = (this.modalIndex - 1 + n) % n;
  }

  nextModal(): void {
    if (!this.modalProduct) return;
    const n = this.modalProduct.images.length;
    this.modalIndex = (this.modalIndex + 1) % n;
  }

  clampIndex(i: number, n: number): number {
    if (n <= 0) return 0;
    return Math.max(0, Math.min(i, n - 1));
  }

  // Rating helpers (simple filled stars)
  starArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  isStarFilled(rating: number, star: number): boolean {
    return rating >= star;
  }

  // Share links (Kaspi product link must be included)
  shareWhatsApp(product: Product): void {
    const kaspiLink = product.link;
    const text = `Check out this product: ${kaspiLink}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  shareTelegram(product: Product): void {
    const kaspiLink = product.link;
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      kaspiLink
    )}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  openKaspi(product: Product): void {
    window.open(product.link, '_blank', 'noopener,noreferrer');
  }

  formatPriceKZT(price: number): string {
    return new Intl.NumberFormat('ru-KZ').format(price) + ' ₸';
  }

  onOverlayClick(e: MouseEvent): void {
    // close only if user clicks the dark overlay, not the modal content
    const target = e.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}