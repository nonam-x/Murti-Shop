import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatFormField } from "@angular/material/form-field";

import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-shipping-form',
  imports: [MatIcon, MatFormField, MatInput, MatFormField],
  templateUrl: './shipping-form.html',
  styles: ``,
})
export class ShippingForm {

}
