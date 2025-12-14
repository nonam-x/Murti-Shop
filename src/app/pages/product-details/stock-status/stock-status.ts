import { Component, input } from '@angular/core';
import { product } from '../../../models/products';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-stock-status',
  imports: [MatIcon],
  templateUrl: './stock-status.html',
  styles: ``,
})
export class StockStatus {
 inStock = input(false)
}
