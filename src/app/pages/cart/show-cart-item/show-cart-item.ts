import { Component, computed, inject, input } from '@angular/core';
import { CartItemsModal } from '../../../models/cartModal';
import { QtySelector } from "../../../components/qty-selector/qty-selector";
import { EcommerceStore } from '../../../ecommerce.store';

import { MatIcon } from "@angular/material/icon";


@Component({
  selector: 'app-show-cart-item',
  imports: [QtySelector, MatIcon],
  templateUrl: './show-cart-item.html',
  styles: ``,
})
export class ShowCartItem {
 item = input.required<CartItemsModal>();
 store = inject(EcommerceStore)
 total = computed (()=> (this.item().product.price * this.item().quantity).toFixed(2))
}
