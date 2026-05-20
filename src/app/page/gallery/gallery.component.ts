// =============================================================================
// GALLERY PAGE COMPONENT
// src/app/page/gallery/gallery.component.ts
// =============================================================================

import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterCountPipe } from '../../common/pipe/filter-count.pipe';
import { RouterModule } from '@angular/router';
import { BUSINESS, GalleryItem } from '../../common/constant/business';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule, FilterCountPipe],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {

  business   = BUSINESS;
  categories = BUSINESS.galleryCategories;

  // ── Filter state
  activeCategory = 'All';

  get filteredItems(): GalleryItem[] {
    if (this.activeCategory === 'All') return this.business.galleryItems;
    return this.business.galleryItems.filter(
      item => item.category === this.activeCategory
    );
  }

  setCategory(cat: string): void {
    this.activeCategory = cat;
    // Re-run intersection observer after DOM settles
    setTimeout(() => this.observeItems(), 50);
  }

  // ── Lightbox state
  lightboxOpen    = false;
  lightboxIndex   = 0;
  lightboxLoading = false;

  get lightboxItem(): GalleryItem {
    return this.filteredItems[this.lightboxIndex];
  }

  openLightbox(index: number): void {
    this.lightboxIndex   = index;
    this.lightboxOpen    = true;
    this.lightboxLoading = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  lightboxPrev(): void {
    this.lightboxLoading = true;
    this.lightboxIndex =
      (this.lightboxIndex - 1 + this.filteredItems.length) % this.filteredItems.length;
  }

  lightboxNext(): void {
    this.lightboxLoading = true;
    this.lightboxIndex =
      (this.lightboxIndex + 1) % this.filteredItems.length;
  }

  onImageLoad(): void {
    this.lightboxLoading = false;
  }

  // Close lightbox when clicking the backdrop (not the image itself)
  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('lightbox')) {
      this.closeLightbox();
    }
  }

  // ── Keyboard navigation
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.lightboxOpen) return;
    switch (event.key) {
      case 'ArrowRight': this.lightboxNext();  break;
      case 'ArrowLeft':  this.lightboxPrev();  break;
      case 'Escape':     this.closeLightbox(); break;
    }
  }

  // ── Scroll reveal via IntersectionObserver
  private observer!: IntersectionObserver;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.observeItems();
  }

  observeItems(): void {
    if (this.observer) this.observer.disconnect();

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('gallery-item--visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = this.elRef.nativeElement.querySelectorAll('.gallery-item');
    items.forEach((el: Element) => this.observer.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    document.body.style.overflow = '';
  }
}
