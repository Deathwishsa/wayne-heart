import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  private dataService = inject(DataService);
  clientData = this.dataService.getClientData();

  currentIndex = 0;
  intervalId?: any;

  // Only use the last 5 images for homepage (as requested)
  get sliderImages() {
    return this.clientData.galleryImages.slice(-5);
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.sliderImages.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.sliderImages.length) % this.sliderImages.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  // Pause on hover (luxury feel)
  pauseAutoSlide() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  resumeAutoSlide() {
    this.startAutoSlide();
  }
}