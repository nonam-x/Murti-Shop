import { Component, computed, inject, input, output } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../ecommerce.store';
import { product } from '../../models/products';
import { MatButton,  } from '@angular/material/button';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon, MatButton],
  templateUrl: './toggle-wishlist-button.html',
  styles: ``,
})
export class ToggleWishlistButton {

  store = inject(EcommerceStore)

    product = input.required<product>()

 addToCartClicked = output<product>()
  id: string | undefined;
  
  isInWishlist = computed(()=>this.store.wishlistItems().find(p=>p.id === this.product().id))

  toggleWishlist(product: product){
    if(this.isInWishlist()){
       this.store.removeFromWishlist(product)
    }else{
      this.store.addToWishlist(product)
    }
  }

}
