import { Component, inject, input, signal } from '@angular/core';
import { product } from '../../../models/products';
import { TitleCasePipe } from '@angular/common';
import { StockStatus } from "../stock-status/stock-status";
import { QtySelector } from "../../../components/qty-selector/qty-selector";
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../../ecommerce.store';
import { ToggleWishlistButton } from "../../../components/toggle-wishlist-button/toggle-wishlist-button";
import { MatButton, MatIconButton } from '@angular/material/button';



@Component({
  selector: 'app-product-info',
  imports: [TitleCasePipe, StockStatus, QtySelector, MatIcon, ToggleWishlistButton, MatIconButton, MatButton],
  templateUrl: './product-info.html',
  styles: ``,
})
export class ProductInfo {

  product = input.required<product>()
  quantity = signal(1)
  store = inject(EcommerceStore)
}
