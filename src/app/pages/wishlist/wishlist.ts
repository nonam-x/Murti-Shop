import { Component, computed, inject, input, output } from '@angular/core';
import { BackButton } from "../../components/back-button/back-button";

import { Product } from '../../components/product/product';
import { EcommerceStore } from '../../ecommerce.store';
import { product } from '../../models/products';
import { MatIcon } from "@angular/material/icon";
import { MatAnchor } from "@angular/material/button";
import { EmptyWishlist } from "./empty-wishlist/empty-wishlist";


@Component({
  selector: 'app-wishlist',
  imports: [BackButton, Product, MatIcon, MatAnchor, EmptyWishlist],
  templateUrl: './wishlist.html',
  styles: ``,
})
export default class Wishlist {
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
