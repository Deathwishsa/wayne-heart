import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUSINESS } from '../../../common/constant/business';

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.scss'],
})
export class StatsBarComponent {
  business = BUSINESS;
}
