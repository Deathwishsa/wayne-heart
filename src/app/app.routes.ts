import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ServicesPageComponent } from './page/services/services-page.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
// import { GalleryComponent } from './page/gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesPageComponent },
  // { path: 'gallery', component: GalleryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '' }
];