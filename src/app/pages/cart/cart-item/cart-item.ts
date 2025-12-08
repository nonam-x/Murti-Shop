import { Component, inject } from '@angular/core';
import { EcommerceStore } from '../../../ecommerce.store';
import { ShowCartItem } from '../show-cart-item/show-cart-item';

@Component({
  selector: 'app-cart-item',
  imports: [ShowCartItem],
  templateUrl: './cart-item.html',
  styles: ``,
})
export class CartItem {
  store = inject(EcommerceStore);
}
