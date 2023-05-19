import { formatDate } from '@angular/common';
import { Component, LOCALE_ID, Inject, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AffiliatesService } from 'src/app/core/services/affiliates/affiliates.service';
import { AppointmentsService } from 'src/app/core/services/appointments/appointments.service';
import { TestsService } from 'src/app/core/services/tests/tests.service';
import { Appointment } from 'src/app/core/models/appointment.model';
import * as moment from 'moment';

@Component({
  selector: 'app-appointments-form',
  templateUrl: './appointments-form.component.html',
  styleUrls: ['./appointments-form.component.css']
})
export class AppointmentsFormComponent implements OnInit {

  appointmentForm!: FormGroup;
  
  affiliatesIdList: number[] = [];
  testIdList: number[] = [];

  @Input() register: Appointment = {
    id: 0, dateAppointment: (new Date()).toJSON(), hourAppointment: '',
    idAffiliate: 0, idTest: 0
  }

  constructor(
    private affiliates: AffiliatesService, 
    private tests: TestsService,
    private fb: FormBuilder,
    private service: AppointmentsService,
    @Inject(LOCALE_ID) private locale: string
  ) {
      this.affiliates.getAll().subscribe(affs => {
        affs.forEach(a => this.affiliatesIdList.push(a.id))
      })

      this.tests.getAll().subscribe(ts => {
        ts.forEach(t => this.testIdList.push(t.id))
      })
  }
  
  ngOnInit(): void {
    this.appointmentForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      dateAppointment: new FormControl(moment(this.register.dateAppointment, 'DD/MM/YYYY'), [Validators.required]),
      hourAppointment: new FormControl(this.register.hourAppointment, [Validators.required]),
      idAffiliate: new FormControl(this.register.idAffiliate.toString(), [Validators.required, Validators.min(1)]),
      idTest: new FormControl(this.register.idTest.toString(), [Validators.required, Validators.min(1)])
    })
  }

  onSubmit() {
    this.appointmentForm.get('dateAppointment')?.setValue(this.getDate())
    if (this.register.id === 0) this.service.save(this.appointmentForm.value).subscribe(r => console.log(r))
    else this.service.update(this.appointmentForm.value, this.register.id).subscribe(r => console.log(r))
  }

  getDate() {
    return formatDate(this.appointmentForm.get('dateAppointment')?.value, 'dd/MM/yyyy', this.locale)
  }
}
