import { Component } from '@angular/core';
import { BuyComponent } from '../buy.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [BuyComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

}
