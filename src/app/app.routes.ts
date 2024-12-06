import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'products',
    loadComponent: () => import('./products-page/products-page.component').then(m => m.ProductsPageComponent)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
