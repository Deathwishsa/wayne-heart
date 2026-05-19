import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CalendarGridComponent } from '../../shared/calendar-grid/calendar-grid.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CalendarGridComponent, CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  private dataService = inject(DataService);
  clientData = this.dataService.getClientData();

  currentDate = new Date();
  selectedDate: Date | null = null;
  selectedTime: string = '';
  name = '';
  email = '';
  serviceType = '';

  timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  get filteredTimeSlots() {
    if (!this.selectedDate) return [];
    return this.timeSlots; // In real app you would filter booked times
  }

  getAvailability(date: Date): string {
    const key = date.toISOString().split('T')[0];
    return this.clientData.mockAvailability[key] || 'available';
  }

  onDateSelected(date: Date) {
    this.selectedDate = date;
    this.selectedTime = '';
  }

  prevMonth() {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    // Limit 1 month back
    if (newDate > new Date(new Date().setMonth(new Date().getMonth() - 1))) {
      this.currentDate = newDate;
    }
  }

  nextMonth() {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    // Limit 24 months forward
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 24);
    if (newDate <= maxDate) this.currentDate = newDate;
  }

  requestAppointment() {
    if (!this.selectedDate || !this.selectedTime || !this.name || !this.email) {
      alert('Please fill all fields');
      return;
    }

    const bookingData = {
      date: this.selectedDate.toDateString(),
      time: this.selectedTime,
      name: this.name,
      email: this.email,
      service: this.serviceType
    };

    console.log('📅 Booking request (frontend-only):', bookingData);
    alert(`✅ Request received for ${this.selectedDate.toDateString()} at ${this.selectedTime}!\n\nWe will confirm shortly.`);

    // Reset form
    this.selectedDate = null;
    this.selectedTime = '';
    this.name = '';
    this.email = '';
    this.serviceType = '';
  }
}