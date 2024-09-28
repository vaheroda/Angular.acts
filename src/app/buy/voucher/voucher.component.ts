import { Component } from '@angular/core';
import { BuyComponent } from '../buy.component';

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [BuyComponent],
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {

}
