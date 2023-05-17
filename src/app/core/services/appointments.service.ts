import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../../shared/models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private appUrl = "/api/controller/appointments";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Appointment[]>(this.appUrl);
  }

  getByAffiliateId(idAffiliate: number) {
    return this.http.get<Appointment[]>(`${this.appUrl}/aff?idAffiliate=${idAffiliate}`);
  }

  save(newAppointment: {dateAppointment: string, hourAppointment: string, idAffiliate: number, idTest: number}) {
    return this.http.post<Appointment>(this.appUrl, newAppointment)
  }

}
