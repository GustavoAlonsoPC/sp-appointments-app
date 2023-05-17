import { formatDate } from '@angular/common';
import { Component, LOCALE_ID, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AffiliatesService } from 'src/app/core/services/affiliates.service';
import { TestsService } from 'src/app/core/services/tests.service';

@Component({
  selector: 'app-appointments-form',
  templateUrl: './appointments-form.component.html',
  styleUrls: ['./appointments-form.component.css']
})
export class AppointmentsFormComponent {
  name = '';
  description = '';
  pick: FormControl = new FormControl(new Date())
  hour: FormControl = new FormControl('')

  affiliatesIdList: number[] = [];
  testIdList: number[] = [];

  constructor(
    private affiliates: AffiliatesService, 
    private tests: TestsService,
    @Inject(LOCALE_ID) private locale: string
    ) {
      this.affiliates.getAll().subscribe(affs => {
        affs.forEach(a => this.affiliatesIdList.push(a.id))
      })

      this.tests.getAll().subscribe(ts => {
        ts.forEach(t => this.testIdList.push(t.id))
      })

      console.log('aff Ids', this.affiliatesIdList)
      console.log('tests Ids', this.testIdList)
    }
  showTime() {
    
    return formatDate(this.pick.value, 'dd/MM/yyyy', this.locale)
  }
  showHour() {
    return this.hour.value
  }
}
