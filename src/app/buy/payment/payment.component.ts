import { Component } from '@angular/core';
import { BuyComponent } from '../buy.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [BuyComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

}
