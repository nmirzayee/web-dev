import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;

  @Output() like = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();


  // thumbs selection (per card)
  selectedIndex = 0;

  // modal
  isModalOpen = false;
  modalIndex = 0;

  get selectedImage(): string {
    return this.product.images[this.selectedIndex] || this.product.image;
  }

  selectThumb(i: number): void {
    this.selectedIndex = i;
  }

  openModal(index?: number): void {
    this.modalIndex = typeof index === 'number' ? index : this.selectedIndex;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }

  prevModal(): void {
    const n = this.product.images.length;
    this.modalIndex = (this.modalIndex - 1 + n) % n;
  }

  nextModal(): void {
    const n = this.product.images.length;
    this.modalIndex = (this.modalIndex + 1) % n;
  }

  onOverlayClick(e: MouseEvent): void {
    const el = e.target as HTMLElement;
    if (el.classList.contains('modal-overlay')) this.closeModal();
  }

  // rating
  starArray(): number[] {
    return [1, 2, 3, 4, 5];
  }
  isStarFilled(rating: number, star: number): boolean {
    return rating >= star;
  }

  // actions
  onLike(): void {
    this.like.emit(this.product.id);
  }

  onDelete(): void {
    const ok = confirm('Are you sure you want to delete this product?');
    if (!ok) return;
    this.delete.emit(this.product.id);
  }

  openKaspi(): void {
    window.open(this.product.link, '_blank', 'noopener,noreferrer');
  }

  shareWhatsApp(): void {
    const text = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  shareTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      this.product.link
    )}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  formatPriceKZT(price: number): string {
    return new Intl.NumberFormat('ru-KZ').format(price) + ' ₸';
  }
}