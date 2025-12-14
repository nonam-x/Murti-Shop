import { Component, computed, inject, input, signal } from '@angular/core';
import { product } from '../../models/products';
import { Product } from '../../components/product/product';
import { Pipe } from '@angular/core';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../ecommerce.store';
import { ToggleWishlistButton } from '../../components/toggle-wishlist-button/toggle-wishlist-button';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';

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
  
    TitleCasePipe,
    ToggleWishlistButton,
    MatIcon,
    MatButton,
  ],
  templateUrl: './product-grid.html',
  styles: ``,
})
export default class ProductGrid {
  //   category = input<string>('');
  //   vendor = input<string>('');

  //   store = inject(EcommerceStore);

  //   categories = signal<string[]>([
  //     'all',
  //     'shirts',
  //     't-shirts',
  //     'hoodies',
  //     // 'sweaters',
  //     // 'shorts',
  //     'jackets',
  //     'jeans',
  //   ]);

  //   vendors = signal<string[]>([
  //     'kartik',
  //     'ravi singh',
  //     'Kumar Viswash',
  //     'Adarsh',
  //   ]);
  //   constructor() {
  //     this.store.setCategory(this.category);
  //     this.store.setVendor(this.vendor);

  //   }

  // // Add to your existing component
  // isOpen = false; // signal ya boolean
  // isOpenS = false; // signal ya boolean

  // toggleSidenav() {
  //   this.isOpen = !this.isOpen;
  // }
  // toggleSidenavseller() {
  //   this.isOpenS = !this.isOpenS;
  // }

  // selectCategory(cat: string) {

  //   this.isOpen = false;    // Auto close
  // }
  // selectVendor(seller: string) {

  //   this.isOpen = false;    // Auto close

  // }

  // // Router + Route + Store
  // private route = inject(ActivatedRoute);
  // private router = inject(Router);
  // store = inject(EcommerceStore);

  // // UI flags (tumhara hi code)
  // isOpen = false;
  // isOpenS = false;

  // // Static lists (abhi ke liye)
  // categories = signal<string[]>([
  //   'all',
  //   'shirts',
  //   't-shirts',
  //   'hoodies',
  //   'jackets',
  //   'jeans',
  // ]);

  // vendors = signal<string[]>([
  //   'all',
  //   'kartik',
  //   'ravi singh',
  //   'Kumar Viswash',
  //   'Adarsh',
  // ]);

  // constructor() {
  //   // URL se category + vendor read karo
  //   this.route.paramMap.subscribe(params => {
  //     const cat = params.get('category') ?? 'all';
  //     this.store.setCategory(cat === 'all' ? '' : cat);
  //   });

  //   this.route.queryParamMap.subscribe(params => {
  //     const vendor = params.get('vendor') ?? '';
  //     this.store.setVendor(vendor);
  //   });
  // }

  // // ===== UI methods =====
  // toggleSidenav() {
  //   this.isOpen = !this.isOpen;
  // }

  // toggleSidenavseller() {
  //   this.isOpenS = !this.isOpenS;
  // }

  // // Category select: URL + store dono update
  // selectCategory(cat: string) {
  //   // 1) URL change karo (vendor ko as-it-is rehne do)
  //   const currentVendor = this.store.vendor(); // already set from URL
  //   this.router.navigate(
  //     ['/Productgrid', cat || 'all'],
  //     { queryParams: currentVendor ? { vendor: currentVendor } : {} }
  //   );

  //   // 2) Store update (agar URL change ke bina bhi call kare to safe)
  //   this.store.setCategory(cat === 'all' ? '' : cat);

  //   // 3) Sidenav close
  //   this.isOpen = false;
  // }

  // // Vendor select: URL + store dono update
  // selectVendor(vendor: string) {
  //   const currentCategory = this.store.category() || 'all';

  //   // 1) URL mein vendor as query param
  //   this.router.navigate(
  //     ['/Productgrid', currentCategory],
  //     { queryParams: vendor ? { vendor } : {} }
  //   );

  //   // 2) Store update
  //   this.store.setVendor(vendor);

  //   // 3) Seller sidenav close
  //   this.isOpenS = false;
  // }

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  store = inject(EcommerceStore);

  isOpen = false;
  isOpenS = false;

  categories = signal<string[]>(['all', 'shirts', 't-shirts', 'hoodies', 'jackets', 'jeans']);

  vendors = signal<string[]>(['all', 'kartik', 'ravi singh', 'Kumar Viswash', 'Adarsh']);

  constructor() {
    // Category from URL path param
    this.route.paramMap.subscribe((params) => {
      const cat = params.get('category') ?? 'all';
      this.store.setCategory(cat === 'all' ? '' : cat);

    });

    // Vendor from URL query param
    this.route.queryParamMap.subscribe((params) => {
      const vendor = params.get('vendor') ?? '';
      this.store.setVendor(vendor);
    });
  }

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  toggleSidenavseller() {
    this.isOpenS = !this.isOpenS;
  }

  clearFilter(){
 this.store.setCategory('')
 this.store.setVendor('');
  }

  selectCategory(cat: string) {
    const categoryValue = cat === 'all' ? '' : cat;
    const currentVendor = this.store.vendor()

    this.store.setCategory(categoryValue);

    this.router.navigate(['/Productgrid', cat], {
      queryParams: currentVendor ? { vendor: currentVendor } : {},
    });

    this.isOpen = false;
  }

  selectVendor(vendor: string) {
   
    const vendorValue = vendor === 'all' ? '' : vendor;
    const currentCategory = this.store.category() || 'all';


    this.store.setVendor(vendorValue);

    this.router.navigate(['/Productgrid', currentCategory], {
      queryParams: vendorValue ? { vendor: vendorValue } : {},
    });

    this.isOpenS = false;
  }
}
