import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'all', redirectTo: 'Productgrid/all' },
  { path: 'home', component: Home },

  {
    path: 'Productgrid/:category',
    loadComponent: () => import('./pages/product-grid/product-grid'),
  },
  {
    path: 'Product/:productId',
    loadComponent: () => import('./pages/product-details/product-details'),
  },
  { path: 'whishlist', loadComponent: () => import('./pages/wishlist/wishlist') },
  { path: 'cart', loadComponent: () => import('./pages/cart/cart') },
  { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout') },
  { path: 'order-success', loadComponent: () => import('./pages/order-succes/order-succes') },
];
