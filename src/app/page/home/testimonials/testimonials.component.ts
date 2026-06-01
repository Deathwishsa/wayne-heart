import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUSINESS } from '../../../common/constant/business';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  business = BUSINESS;
  stars = [1, 2, 3, 4, 5];
}
