import { formatDate } from '@angular/common';
import { Component, LOCALE_ID, Inject, OnInit, Input, Injector } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/core/models/appointment.model';
import * as moment from 'moment';
import { AbstractCrudForm } from 'src/app/core/base/abstract-crud-form';

@Component({
  selector: 'app-appointments-form',
  templateUrl: './appointments-form.component.html',
  styleUrls: ['./appointments-form.component.css']
})
export class AppointmentsFormComponent extends AbstractCrudForm implements OnInit {
  
  affiliatesIdList: number[] = [];
  testIdList: number[] = [];

  @Input() data: Appointment = {
    id: 0, dateAppointment: (new Date()).toJSON(), hourAppointment: '',
    idAffiliate: 0, idTest: 0
  }

  constructor(
    private fb: FormBuilder,
    private i: Injector,
    @Inject(LOCALE_ID) private locale: string
  ) {
    super(i);
      this.service.getAll('affiliates').subscribe(affs => {
        affs.forEach(a => this.affiliatesIdList.push(a.id))
      })

      this.service.getAll('tests').subscribe(ts => {
        ts.forEach(t => this.testIdList.push(t.id))
      })
  }
  
  ngOnInit(): void {
    this.form = this.initForm();
    this.register = <Appointment> this.data
  }

  initForm(): FormGroup {
    return this.fb.group({
      dateAppointment: new FormControl(moment(this.data.dateAppointment, 'DD/MM/YYYY'), [Validators.required]),
      hourAppointment: new FormControl(this.data.hourAppointment, [Validators.required]),
      idAffiliate: new FormControl(this.data.idAffiliate.toString(), [Validators.required, Validators.min(1)]),
      idTest: new FormControl(this.data.idTest.toString(), [Validators.required, Validators.min(1)])
    })
  }

  override onSubmit(context: string): void {
    this.form.get('dateAppointment')?.setValue(this.getDate());
    super.onSubmit(context);
  }

  getDate() {
    return formatDate(this.form.get('dateAppointment')?.value, 'dd/MM/yyyy', this.locale)
  }
}
