import { Component } from '@angular/core';
import { ServicesComponent } from '../services.component';
import { FooterComponent } from '../../footer/footer.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [ServicesComponent, FooterComponent, FormComponent],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent {

}
