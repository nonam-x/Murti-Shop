import { Component, input } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-back-button',
  imports: [MatAnchor, RouterLink, MatIcon],
  templateUrl: './back-button.html',
  styles: `
  :host {
    display: block;
  }
  `,
})
export class BackButton {

 label = input('');
 navigateTo = input<string>()

}
