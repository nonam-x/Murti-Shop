import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatButton } from '@angular/material/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-empty-wishlist',
  imports: [MatIcon, MatButton, RouterLink],
  templateUrl: './empty-wishlist.html',
  styles: ``,
})
export class EmptyWishlist {

}
