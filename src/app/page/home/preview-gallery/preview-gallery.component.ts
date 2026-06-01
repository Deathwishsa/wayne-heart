import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-preview-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './preview-gallery.component.html',
  styleUrls: ['./preview-gallery.component.scss'],
})
export class PreviewGalleryComponent {
  galleryImages = [
    'https://picsum.photos/id/1005/800/600',
    'https://picsum.photos/id/1018/800/600',
    'https://picsum.photos/id/1015/800/600',
    'https://picsum.photos/id/1023/800/600',
    'https://picsum.photos/id/1035/800/600',
    'https://picsum.photos/id/1040/800/600',
  ];
}
