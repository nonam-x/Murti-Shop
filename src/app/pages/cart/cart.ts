import { Component, inject } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { MatIcon } from '@angular/material/icon';

import { EcommerceStore } from '../../ecommerce.store';

import { MatButton } from '@angular/material/button';
import { CartItem } from './cart-item/cart-item';
import { SummarizeOrder } from "../../components/summarize-order/summarize-order";

// import { EmptyCArt } from "./empty-cart/empty-cart";

@Component({
  selector: 'app-cart',
  imports: [BackButton, MatIcon, MatButton, CartItem, SummarizeOrder],
  templateUrl: './cart.html',
  styles: ``,
})
export default class Cart {
  store = inject(EcommerceStore);
}
