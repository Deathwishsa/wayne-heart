import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private dataService = inject(DataService);
  clientData = this.dataService.getClientData();

  activeTab: 'hair' | 'nails' | 'combos' = 'hair';

  setTab(tab: 'hair' | 'nails' | 'combos') {
    this.activeTab = tab;
  }

  get currentServices() {
    return this.clientData.services[this.activeTab];
  }
}