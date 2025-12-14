import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../ecommerce.store';
import { BackButton } from "../../components/back-button/back-button";
import { ProductInfo } from "./product-info/product-info";

@Component({
  selector: 'app-product-details',
  imports: [BackButton, ProductInfo],
  templateUrl: './product-details.html',
  styles: ``,
})
export default class ProductDetails {

  productId = input.required<string>();

  store = inject(EcommerceStore)

  constructor(){
    this.store.setProductId(this.productId)

  }

  backRoute = computed(()=> `/Productgrid/${this.store.category()}`);


}
