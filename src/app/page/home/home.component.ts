// =============================================================================
// HOME PAGE COMPONENT
// src/app/page/home/home.component.ts
// =============================================================================

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BUSINESS } from '../../common/constant/business';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  business = BUSINESS;

  // ── Hero Carousel
  currentSlide = 0;
  private timer: ReturnType<typeof setInterval> | null = null;

  // Placeholder images — swap for real assets in business.ts / assets folder
  heroImages = [
    'https://picsum.photos/id/1070/1600/900',
    'https://picsum.photos/id/1074/1600/900',
    'https://picsum.photos/id/1080/1600/900',
    'https://picsum.photos/id/1043/1600/900',
  ];

  galleryImages = [
    'https://picsum.photos/id/1005/800/600',
    'https://picsum.photos/id/1018/800/600',
    'https://picsum.photos/id/1015/800/600',
    'https://picsum.photos/id/1023/800/600',
    'https://picsum.photos/id/1035/800/600',
    'https://picsum.photos/id/1040/800/600',
  ];

  // Used for *ngFor on star ratings
  stars = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel(): void {
    this.timer = setInterval(() => this.nextSlide(), 5000);
  }

  stopCarousel(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.stopCarousel();
    this.startCarousel();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.heroImages.length;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.heroImages.length) % this.heroImages.length;
    this.stopCarousel();
    this.startCarousel();
  }
}
