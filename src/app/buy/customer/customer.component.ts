import { Component } from '@angular/core';
import { BuyComponent } from '../buy.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [BuyComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
