import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUSINESS } from '../../../common/constant/business';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  business = BUSINESS;
}
