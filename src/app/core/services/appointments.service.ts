import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../../shared/models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private testUrl = "/api/controller/appointments";
  constructor(private http: HttpClient) { }

  getAllAppointments() {
    return this.http.get<Appointment[]>(this.testUrl);
  }
}
