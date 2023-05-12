import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crud-appointments',
  templateUrl: './crud-appointments.component.html',
  styleUrls: ['./crud-appointments.component.css']
})
export class CrudAppointmentsComponent {
  
  @Input() newOrEdit = '';

  titleCrud = `Citas - ${this.newOrEdit} Cita`;
}
