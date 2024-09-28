import { Component } from '@angular/core';
import { ServicesComponent } from '../services.component';
import { FooterComponent } from '../../footer/footer.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-cite',
  standalone: true,
  imports: [ServicesComponent, FooterComponent, FormComponent],
  templateUrl: './cite.component.html',
  styleUrl: './cite.component.css'
})
export class CiteComponent {

}
