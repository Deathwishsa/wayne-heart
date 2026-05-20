// =============================================================================
// FOOTER COMPONENT
// src/app/common/component/footer/footer.component.ts
// =============================================================================

import { Component } from '@angular/core';
import { BUSINESS } from '../../constant/business';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  business      = BUSINESS;
  currentYear   = new Date().getFullYear();
}
