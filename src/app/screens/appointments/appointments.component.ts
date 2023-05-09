import { Component } from '@angular/core';
import { Appointment } from 'src/app/shared/models/appointment.model';
import { Item } from 'src/app/shared/models/item.model';
import { AppointmentsService } from 'src/app/shared/services/appointments.service';

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
    this.service.getAllAppointments().subscribe(data => {
      this.allAffiliates = data;
    });
  }

  itemType(): Item<Appointment> {
    return {
      listingItems: this.allAffiliates
    };
  }
}
