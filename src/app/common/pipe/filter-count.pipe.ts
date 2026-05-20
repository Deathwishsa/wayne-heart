// =============================================================================
// FILTER COUNT PIPE
// src/app/common/pipe/filter-count.pipe.ts
//
// Usage: {{ galleryItems | filterCount : 'Weddings' }}
// Returns the number of gallery items matching the given category.
// =============================================================================

import { Pipe, PipeTransform } from '@angular/core';
import { GalleryItem } from '../constant/business';

@Pipe({
  name: 'filterCount',
  standalone: true,
  pure: true,
})
export class FilterCountPipe implements PipeTransform {
  transform(items: GalleryItem[], category: string): number {
    if (!items || !category) return 0;
    return items.filter(item => item.category === category).length;
  }
}
