import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BUSINESS } from '../../../common/constant/business';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  business = BUSINESS;
}
