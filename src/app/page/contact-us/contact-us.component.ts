// =============================================================================
// CONTACT PAGE COMPONENT
// src/app/page/contact-us/contact-us.component.ts
// =============================================================================

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BUSINESS } from '../../common/constant/business';

interface ContactForm {
  name     : string;
  email    : string;
  phone    : string;
  eventType: string;
  eventDate: string;
  message  : string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {

  business = BUSINESS;

  form: ContactForm = {
    name     : '',
    email    : '',
    phone    : '',
    eventType: '',
    eventDate: '',
    message  : '',
  };

  formStatus: FormStatus = 'idle';

  // Min date for the date picker — today
  get minDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  // Direct contact info cards (pulled from business.ts — add fields there to extend)
  contactCards = [
    {
      icon   : 'fa-solid fa-phone',
      label  : 'Call or WhatsApp',
      value  : BUSINESS.phone,
      href   : `tel:${BUSINESS.phone}`,
    },
    {
      icon   : 'fa-solid fa-envelope',
      label  : 'Email',
      value  : BUSINESS.email,
      href   : `mailto:${BUSINESS.email}`,
    },
    {
      icon   : 'fa-solid fa-location-dot',
      label  : 'Based in',
      value  : BUSINESS.location,
      href   : null,
    },
  ];

  async onSubmit(): Promise<void> {
    if (this.formStatus === 'submitting') return;

    this.formStatus = 'submitting';

    try {
      const response = await fetch('https://software-email-relay-api.vercel.app/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key'   : '0fba8806c75cca98b6577dbd360d03bfcc220c44ecb7888e',
        },
        body: JSON.stringify({
          fields: {
            name      : this.form.name,
            email     : this.form.email,
            phone     : this.form.phone || 'Not provided',
            event_type: this.form.eventType,
            event_date: this.form.eventDate,
            message   : this.form.message,
          },
        }),
      });

      const data = await response.json();
      this.formStatus = data.success ? 'success' : 'error';
    } catch {
      this.formStatus = 'error';
    }
  }

  resetForm(): void {
    this.form = {
      name     : '',
      email    : '',
      phone    : '',
      eventType: '',
      eventDate: '',
      message  : '',
    };
    this.formStatus = 'idle';
  }
}
