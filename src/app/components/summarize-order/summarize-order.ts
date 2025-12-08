import { Component, computed, inject } from '@angular/core';
import { EcommerceStore } from '../../ecommerce.store';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-summarize-order',
  imports: [],
  templateUrl: './summarize-order.html',
  styles: ``,
})
export class SummarizeOrder {

  store = inject(EcommerceStore)

  subtotal = computed(() =>
    this.store.cartItems().reduce((acc: number, item: { product: { price: number; }; quantity: number; }) => acc + item.product.price * item.quantity,0))

  tax = computed(()=> (0.05 * this.subtotal()))

  total = computed(()=> (this.subtotal() - this.tax()))

}
