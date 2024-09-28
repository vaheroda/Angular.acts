import { Component } from '@angular/core';
import { StoreComponent } from "../store.component";
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [StoreComponent, FooterComponent],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css'
})
export class ConsultationComponent {

}
