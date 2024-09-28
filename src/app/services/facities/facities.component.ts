import { Component } from '@angular/core';
import { ServicesComponent } from '../services.component';
import { FooterComponent } from '../../footer/footer.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-facities',
  standalone: true,
  imports: [ServicesComponent, FooterComponent, FormComponent],
  templateUrl: './facities.component.html',
  styleUrl: './facities.component.css'
})
export class FacitiesComponent {

}
