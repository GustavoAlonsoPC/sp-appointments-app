import { Injectable } from '@angular/core';
import { AffiliatesService } from './affiliates/affiliates.service';
import { AppointmentsService } from './appointments/appointments.service';
import { TestsService } from './tests/tests.service';
import { Affiliate } from 'src/app/core/models/affiliate.model';
import { BehaviorSubject} from 'rxjs';
import { Appointment } from 'src/app/core/models/appointment.model';
import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private idSub = new BehaviorSubject<number[]>([]);
  private affialiatesSubject = new BehaviorSubject<Affiliate[]>([])
  private appointmentsSubject = new BehaviorSubject<Appointment[]>([])
  private testsSubject = new BehaviorSubject<Test[]>([])

  ids$ = this.idSub.asObservable();

  appointments$ = this.appointmentsSubject.asObservable();
  affiliates$ = this.affialiatesSubject.asObservable();
  tests$ = this.testsSubject.asObservable();

  constructor(
    private appointments: AppointmentsService,
    private affiliates: AffiliatesService,
    private tests: TestsService
  ) { 
    this.affiliates.getAll().subscribe(data => this.idSub.next(data.map(d => d.id)))
  }

  emitIds(ids: number[]) {
    this.idSub.next(ids);
  }

  emitDataByFilterDate(date: string) {
    this.appointments.getByDate(date).subscribe(data => {
      this.emitOperation(data);
    })  
  }

  emitDataByFilterId(id: number) {
    this.appointments.getByAffiliateId(id).subscribe(data => {
      this.emitOperation(data);
    })
  }

  emitListAffiliates(ids: number[]){
    let affiliates: Affiliate[] = [];
    ids.forEach(idA => {
      this.affiliates.getById(idA).subscribe(aff => {
        affiliates.push(aff);
        this.affialiatesSubject.next(affiliates);
      });
    })
  }

  emitListTests(ids: number[]) {
    let tests: Test[] = []
      ids.forEach(idT => {
        this.tests.getById(idT).subscribe(t => {
          tests.push(t);
          this.testsSubject.next(tests);
        })
      })
  }

  emitEmptyState() {
    this.appointmentsSubject.next([]);
    this.affialiatesSubject.next([]);
    this.testsSubject.next([]);
  }

  emitAll(data: Appointment[]) {
    const idxsAffs = Array.from(new Set(data.map(a => a.idAffiliate)));
    const idxsTests = Array.from(new Set(data.map(a => a.idTest)));
    this.emitListAffiliates(idxsAffs);
    this.emitListTests(idxsTests)

    this.appointmentsSubject.next(data)
  }

  emitOperation(data: Appointment[]) {
    if(!data) {
      this.emitEmptyState();
      return;
    }

    this.emitAll(data);
  }
}
