import { Component, inject } from '@angular/core';
import { BackButton } from "../../components/back-button/back-button";
import { ShippingForm } from "./shipping-form/shipping-form";

import { SummarizeOrder } from "../../components/summarize-order/summarize-order";
import { PaymentForm } from "./payment-form/payment-form";
import { EcommerceStore } from '../../ecommerce.store';
import {  MatButton } from "@angular/material/button";

@Component({
  selector: 'app-checkout',
  imports: [BackButton, ShippingForm, SummarizeOrder, PaymentForm, MatButton],
  templateUrl: './checkout.html',
  styles: ``,
})
export default class Checkout {
 store = inject(EcommerceStore)
}
