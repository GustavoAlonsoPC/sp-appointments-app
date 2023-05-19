import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private appUrl = "/api/controller/appointments";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Appointment[]>(this.appUrl);
  }

  getById(id: number) {
    return this.http.get<Appointment>(`${this.appUrl}/${id}`);
  }

  getByAffiliateId(idAffiliate: number) {
    return this.http.get<Appointment[]>(`${this.appUrl}/aff?idAffiliate=${idAffiliate}`);
  }

  save(newAppointment: {dateAppointment: string, hourAppointment: string, idAffiliate: number, idTest: number}) {
    return this.http.post<Appointment>(this.appUrl, newAppointment)
  }

  update(existing: {dateAppointment?: string, hourAppointment?: string, idAffiliate?: number, idTest?: number}, id: number) {
    return this.http.put<Appointment>(`${this.appUrl}?appointmentId=${id}`, existing)
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.appUrl}/${id}`, {observe: 'response'})
  }

}
