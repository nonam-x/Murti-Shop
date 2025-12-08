import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatRadioButton, MatRadioGroup } from "@angular/material/radio";

@Component({
  selector: 'app-payment-form',
  imports: [MatIcon, MatRadioGroup, MatRadioButton],
  templateUrl: './payment-form.html',
  styles: ``,
})
export class PaymentForm {

}
