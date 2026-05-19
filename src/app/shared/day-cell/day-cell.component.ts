import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingStatus } from '../../constants/client-data';

@Component({
  selector: 'app-day-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day-cell.component.html',
  styleUrls: ['./day-cell.component.scss']
})
export class DayCellComponent {
  @Input() date: Date | null = null;
  @Input() status: BookingStatus | null = null;
  @Output() dateClick = new EventEmitter<void>();

  get isToday() {
    if (!this.date) return false;
    const today = new Date();
    return this.date.toDateString() === today.toDateString();
  }

  onClick() {
    if (this.date && this.status !== 'booked') {
      this.dateClick.emit();
    }
  }
}