import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { GalleryComponent } from './page/gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '' }
];