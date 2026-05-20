// =============================================================================
// HEADER COMPONENT
// src/app/common/component/header/header.component.ts
// =============================================================================

import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BUSINESS } from '../../constant/business';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  business = BUSINESS;
  mobileMenuOpen = false;
  isScrolled      = false;

  private routerSub!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Close mobile menu on route change
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.mobileMenuOpen = false;
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
