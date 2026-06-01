import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BUSINESS } from '../../../common/constant/business';

@Component({
  selector: 'app-preview-booking',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './preview-booking.component.html',
  styleUrls: ['./preview-booking.component.scss'],
})
export class PreviewBookingComponent {
  business = BUSINESS;
}
