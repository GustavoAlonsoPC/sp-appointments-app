import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../../models/appointment.model';
import { IService } from '../../base/service-interface';
import { CrudAppointment } from '../../models/crud-appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService implements IService<Appointment> {

  private appUrl = "/api/controller/appointments";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Appointment[]>(this.appUrl);
  }

  getById(id: number) {
    return this.http.get<Appointment>(`${this.appUrl}/${id}`);
  }

  save(newReg: CrudAppointment) {
    return this.http.post<Appointment>(this.appUrl, newReg)
  }

  update(existing: CrudAppointment, id: number) {
    return this.http.put<Appointment>(`${this.appUrl}?appointmentId=${id}`, existing)
  }

  delete(id: number) {
    return this.http.delete(`${this.appUrl}/${id}`, {observe: 'response'})
  }

  getByAffiliateId(idAffiliate: number) {
    return this.http.get<Appointment[]>(`${this.appUrl}/aff?idAffiliate=${idAffiliate}`);
  }

  getByDate(date: string) {
    return this.http.get<Appointment[]>(`${this.appUrl}/date?dateAppointment=${date}`);
  }

}
