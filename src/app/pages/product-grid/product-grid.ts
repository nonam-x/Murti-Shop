import { Component, computed, inject, input, signal } from '@angular/core';
import { product } from '../../models/products';
import { Product } from '../../components/product/product';
import { Pipe } from '@angular/core';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import {  NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../ecommerce.store';
import { ToggleWishlistButton } from "../../components/toggle-wishlist-button/toggle-wishlist-button";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-product-grid',
  imports: [
    Product,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatListItemTitle,
    RouterLink,
    TitleCasePipe,
    ToggleWishlistButton,
    MatIcon,
    MatIconButton,
  
],
  templateUrl: './product-grid.html',
  styles: ``,
})


export default class ProductGrid {
  category = input<string>('');
  store = inject(EcommerceStore);
  categories = signal<string[]>([
    'all',
    'shirts',
    't-shirts',
    'hoodies',
    // 'sweaters',
    // 'shorts',
    'jackets',
    'jeans',
  ]);
  constructor() {
    this.store.setCategory(this.category);

  }
 
//  isExpanded = true;

//   toggleSidenav() {
//     this.isExpanded = !this.isExpanded;
//   }


// Add to your existing component
isOpen = false; // signal ya boolean

toggleSidenav() {
  this.isOpen = !this.isOpen;
}

selectCategory(cat: string) {
  // this.category.set(cat); // tumhara existing logic
  this.isOpen = false;    // Auto close
}

}
