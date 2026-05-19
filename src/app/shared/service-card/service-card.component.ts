import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../../constants/client-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() service!: Service;
}