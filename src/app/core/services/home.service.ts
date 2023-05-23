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
  private idSubFilter = new BehaviorSubject<number[]>([]);
  private dateSubFilter = new BehaviorSubject<string>('');
  private affIdSubFilter = new BehaviorSubject<number>(0);

  ids$ = this.idSub.asObservable();
  idsFilter$ = this.idSubFilter.asObservable();
  dateFilter$ = this.dateSubFilter.asObservable();
  idAffFilter$ = this.affIdSubFilter.asObservable();

  constructor(private appointments: AppointmentsService) { }

  emitIds(ids: number[]) {
    this.idSub.next(ids);
  }

  emitIdsFilterDate(date: string) {
    let idxs: number[] = []

    this.appointments.getByDate(date).subscribe(data => {
      if(!data) return this.idSubFilter.next([]);
      idxs = data.map(a => a.idAffiliate)
      this.idSubFilter.next(idxs)
      this.dateSubFilter.next(date)
    })
  }

  emitFilterIdAff(id: number) {
    this.affIdSubFilter.next(id);
  }
}
