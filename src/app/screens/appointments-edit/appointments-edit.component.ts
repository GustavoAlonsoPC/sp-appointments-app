import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/core/models/appointment.model';
import { AppointmentsService } from 'src/app/core/services/appointments/appointments.service';

@Component({
  selector: 'app-appointments-edit',
  templateUrl: './appointments-edit.component.html',
  styleUrls: ['./appointments-edit.component.css']
})
export class AppointmentsEditComponent implements OnInit {

  id: number | null = 0;
  appointment: Appointment = {
    id: 0, dateAppointment: '', hourAppointment: '',
    idAffiliate: 0, idTest: 0
  }

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentsService
  ) {}

  ngOnInit(): void {
    this.suscribeToData();
  }

  suscribeToData() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.appointmentService.getById(this.id).subscribe(a => {
      this.appointment = a;
    });
  }
}
