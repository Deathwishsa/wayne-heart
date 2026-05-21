// =============================================================================
// HOME PAGE COMPONENT
// src/app/page/home/home.component.ts
// =============================================================================

import { Component } from '@angular/core';
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
export class HomeComponent {

  business = BUSINESS;

  galleryImages = [
    'https://picsum.photos/id/1005/800/600',
    'https://picsum.photos/id/1018/800/600',
    'https://picsum.photos/id/1015/800/600',
    'https://picsum.photos/id/1023/800/600',
    'https://picsum.photos/id/1035/800/600',
    'https://picsum.photos/id/1040/800/600',
  ];

  stars = [1, 2, 3, 4, 5];
}
