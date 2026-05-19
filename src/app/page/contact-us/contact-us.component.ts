import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  private dataService = inject(DataService);
  private sanitizer = inject(DomSanitizer);

  clientData = this.dataService.getClientData();

  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitted = false;

  get mapUrl(): SafeResourceUrl {
    const { lat, lng } = this.clientData.googleMapCoords;
    const url = `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onSubmit() {
    console.log('📧 Contact form submitted:', this.formData);
    // TODO: Connect to backend / email service later
    this.submitted = true;

    // Reset form
    this.formData = { name: '', email: '', phone: '', message: '' };

    // Auto-hide success message
    setTimeout(() => {
      this.submitted = false;
    }, 6000);
  }
}