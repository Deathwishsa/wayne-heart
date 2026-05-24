import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { StatsBarComponent } from './stats-bar/stats-bar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PreviewGalleryComponent } from './preview-gallery/preview-gallery.component';
import { PreviewBookingComponent } from './preview-booking/preview-booking.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    StatsBarComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    PreviewGalleryComponent,
    PreviewBookingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
