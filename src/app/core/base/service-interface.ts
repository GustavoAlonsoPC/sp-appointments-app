import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { CrudAffiliate } from "../models/crud-affiliate.model";
import { CrudTest } from "../models/crud-test.model";
import { CrudAppointment } from "../models/crud-appointment.model";

export interface IService<T> {
  getAll(): Observable<T[]>
  getById(id: number): Observable<T>
  save(newReg: CrudAffiliate | CrudTest | CrudAppointment): Observable<T>
  update(existing: CrudAffiliate | CrudTest | CrudAppointment, id: number): Observable<T>
  delete(id: number): Observable<HttpResponse<Object>>
}