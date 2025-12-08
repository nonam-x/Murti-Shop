import { Component, input, output } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { emit } from 'process';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-qty-selector',
  imports: [MatAnchor, MatIcon],
  templateUrl: './qty-selector.html',
  styles: ``,
})
export class QtySelector {

  quantity = input(0)
  qtyUpdated =output<number>();


}
