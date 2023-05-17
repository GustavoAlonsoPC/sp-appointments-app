import { formatDate } from '@angular/common';
import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AffiliatesService } from 'src/app/core/services/affiliates.service';
import { TestsService } from 'src/app/core/services/tests.service';
import { Appointment } from 'src/app/shared/models/appointment.model';

@Component({
  selector: 'app-appointments-form',
  templateUrl: './appointments-form.component.html',
  styleUrls: ['./appointments-form.component.css']
})
export class AppointmentsFormComponent implements OnInit {

  appointmentForm!: FormGroup;
  
/*   pick: FormControl = new FormControl(new Date(), [Validators.required])
  hour: FormControl = new FormControl('', [Validators.required])
 */
  
  affiliatesIdList: number[] = [];
  testIdList: number[] = [];

  register: Appointment = {
    id: 0, dateAppointment: (new Date()).toString(), hourAppointment: '',
    idAffiliate: 0, idTest: 0
  }

  constructor(
    private affiliates: AffiliatesService, 
    private tests: TestsService,
    private fb: FormBuilder,
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
      dateAppointment: new FormControl(this.register.dateAppointment, [Validators.required]),
      hourAppointment: new FormControl(this.register.hourAppointment, [Validators.required]),
      idAffiliate: new FormControl(this.register.idAffiliate, [Validators.required]),
      idTest: new FormControl(this.register.idTest, [Validators.required])
    })
  }

  onSubmit() {
    if (this.register.id === 0) console.log(this.appointmentForm.value)
  }
  
/* 
  showTime() {
    
    return formatDate(this.pick.value, 'dd/MM/yyyy', this.locale)
  }
  showHour() {
    return this.hour.value
  }
 */
}
