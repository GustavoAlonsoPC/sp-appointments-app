import { Injectable } from '@angular/core';
import { AffiliatesService } from './affiliates/affiliates.service';
import { AppointmentsService } from './appointments/appointments.service';
import { TestsService } from './tests/tests.service';

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
    return this.mapToService(context)?.delete(id)
  }

  mapToService(context: string) {
    switch (context) {
      case 'affiliates':
        return this.affiliates;

      case 'tests':
        return this.tests;
    
      case 'appointments':
        return this.appointments;

      default:
        return null;
    }
  }
}
