import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayCellComponent } from '../day-cell/day-cell.component';
import { BookingStatus } from '../../constants/client-data';

@Component({
  selector: 'app-calendar-grid',
  standalone: true,
  imports: [CommonModule, DayCellComponent],
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss']
})
export class CalendarGridComponent {
  @Input() currentDate: Date = new Date();
  @Input() availability: { [date: string]: BookingStatus } = {};
  @Output() dateSelected = new EventEmitter<Date>();

  get monthName() {
    return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  }

  get daysInMonth() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();

    const result: (Date | null)[] = [];
    // Empty slots before first day 
    for (let i = 0; i < firstDay; i++) result.push(null);
    // Actual days
    for (let i = 1; i <= days; i++) {
      result.push(new Date(year, month, i));
    }
    return result;
  }

  getStatus(date: Date): BookingStatus {
    const key = date.toISOString().split('T')[0];
    return this.availability[key] || 'available';
  }

  selectDate(date: Date) {
    this.dateSelected.emit(date);
  }

  emitPrevMonth() {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    this.currentDate = newDate;
  }

  emitNextMonth() {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    this.currentDate = newDate;
  }
}