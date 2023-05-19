import { Component } from '@angular/core';
import { Appointment } from 'src/app/core/models/appointment.model';
import { Item } from 'src/app/core/models/item.model';
import { AppointmentsService } from 'src/app/core/services/appointments/appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {

  allAffiliates: Appointment[] = [];
  attrs = ['Id', 'Fecha', 'Hora', 'Id Prueba', 'Id Paciente'];

  constructor(private service: AppointmentsService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.allAffiliates = data;
    });
  }

  itemType(): Item<Appointment> {
    return {
      listingItems: this.allAffiliates
    };
  }
}
