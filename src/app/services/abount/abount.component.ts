import { Component } from '@angular/core';
import { ServicesComponent } from '../services.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-abount',
  standalone: true,
  imports: [ServicesComponent, FooterComponent],
  templateUrl: './abount.component.html',
  styleUrl: './abount.component.css'
})
export class AbountComponent {

}
