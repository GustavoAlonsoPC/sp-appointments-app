import { Injectable } from '@angular/core';
import { AffiliatesService } from './affiliates/affiliates.service';
import { AppointmentsService } from './appointments/appointments.service';
import { TestsService } from './tests/tests.service';
import { IService } from '../base/service-interface';
import { Affiliate } from '../models/affiliate.model';
import { Test } from '../models/test.model';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(
    private affiliates: AffiliatesService,
    private appointments: AppointmentsService,
    private tests: TestsService
  ) { }

  delete(context: string, id: number) {
    return this.mapToService(context).delete(id)
  }

  save(context: string, data: Affiliate | Test | Appointment) {
    return this.mapToService(context).save(data)
  }
  update(context: string, data: Affiliate | Test | Appointment, id: number) {
    return this.mapToService(context).update(data, id);
  }

  mapToService(context: string): IService<Affiliate | Test | Appointment> {
    switch (context) {
      case 'affiliates':
        return this.affiliates;

      case 'tests':
        return this.tests;
    
      case 'appointments':
        return this.appointments;

      default:
        throw new Error('No service found');
    }
  }
}
