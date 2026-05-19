import { Component, inject } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private dataService = inject(DataService);
  clientData = this.dataService.getClientData();

  currentYear = new Date().getFullYear();   // ← Fixed the Date error
}