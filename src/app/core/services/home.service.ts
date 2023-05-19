import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AffiliatesService } from './affiliates/affiliates.service';
import { AppointmentsService } from './appointments/appointments.service';
import { TestsService } from './tests/tests.service';
import { Affiliate } from 'src/app/core/models/affiliate.model';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/core/models/appointment.model';
import { CustomAppointmentsDetails } from 'src/app/core/models/custom-appointments-detals.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  affiliatesList: Affiliate[] = [];
  affiliateAppointmentsList: Appointment[] = [];
  appointmentResponse: CustomAppointmentsDetails[] = [];
  testsNames: string[] = [];

  constructor(
    private http: HttpClient, 
    private affiliates: AffiliatesService, 
    private appointments: AppointmentsService,
    private tests: TestsService) {
      
      this.getAllAffiliates().subscribe(data => {
        this.affiliatesList = data;
      });
     }

    getAllAffiliates(): Observable<Affiliate[]> {
      return this.affiliates.getAll();
    }

    getAllAffiliateAppointments(idAffiliate: number) {
      return this.appointments.getByAffiliateId(idAffiliate).subscribe(data => {
        this.affiliateAppointmentsList = data;
      });
    }
  
    getTestById(idTest: number) {
      return this.tests.getById(idTest);
    }

    extractTestsNames() {
      this.affiliateAppointmentsList.forEach(app => {
        this.getTestById(app.idTest).subscribe(data => {
          this.testsNames.push(data.name);
        });
      })
    }

    mapAppointmentsResponse() {
      this.extractTestsNames();
      this.affiliateAppointmentsList.forEach((app, idx) => {
        this.appointmentResponse.push({
          id: app.id,
          dateAppointment: app.dateAppointment,
          hourAppointment: app.hourAppointment,
          testName: this.testsNames[idx]
        })
      })
    }

    clickAff(idAffiliate: number) {
      this.getAllAffiliateAppointments(idAffiliate);
      this.mapAppointmentsResponse();
      return this.appointmentResponse;
    }
}
