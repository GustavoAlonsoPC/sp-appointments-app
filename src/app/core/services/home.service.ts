import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AffiliatesService } from './affiliates/affiliates.service';
import { AppointmentsService } from './appointments/appointments.service';
import { TestsService } from './tests/tests.service';
import { Affiliate } from 'src/app/core/models/affiliate.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Appointment } from 'src/app/core/models/appointment.model';
import { CustomAppointmentsDetails } from 'src/app/core/models/custom-appointments-detals.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private idSub = new BehaviorSubject<number[]>([]);
  ids$ = this.idSub.asObservable();

  emitIds(ids: number[]) {
    this.idSub.next(ids);
  }
  constructor() { }
}
