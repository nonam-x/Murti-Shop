import { Component, computed, inject, input, output, signal } from '@angular/core';
import { product } from '../../models/products';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../ecommerce.store';


@Component({
  selector: 'app-product',
  imports: [MatAnchor, MatIcon],
  templateUrl: './product.html',
  styles: ``,
})
export class Product {

 

  product = input.required<product>()

 addToCartClicked = output<product>()
  id: string | undefined;
  isInWishlist = computed(()=>this.store.wishlistItems().find(p=>p.id === this.product().id))
store = inject(EcommerceStore)
  toggleWishlist(product: product){
    if(this.isInWishlist()){
       this.store.removeFromWishlist(product)
    }else{
      this.store.addToWishlist(product)
    }
  }
}
