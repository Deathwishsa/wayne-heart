import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  private dataService = inject(DataService);
  clientData = this.dataService.getClientData();

  activeFilter: 'all' | 'hair' | 'nails' | 'combo' = 'all';
  selectedImageIndex: number | null = null;

  get filteredImages() {
    if (this.activeFilter === 'all') return this.clientData.galleryImages;
    return this.clientData.galleryImages.filter(img => img.category === this.activeFilter);
  }

  setFilter(filter: 'all' | 'hair' | 'nails' | 'combo') {
    this.activeFilter = filter;
    this.selectedImageIndex = null; // close lightbox when filter changes
  }

  openLightbox(index: number) {
    this.selectedImageIndex = index;
  }

  closeLightbox() {
    this.selectedImageIndex = null;
  }

  nextImage() {
    if (this.selectedImageIndex === null) return;
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.filteredImages.length;
  }

  prevImage() {
    if (this.selectedImageIndex === null) return;
    this.selectedImageIndex = (this.selectedImageIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
  }

  // Keyboard support (ESC to close)
  onKeyDown(event: KeyboardEvent) {
    if (this.selectedImageIndex === null) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
  }
}