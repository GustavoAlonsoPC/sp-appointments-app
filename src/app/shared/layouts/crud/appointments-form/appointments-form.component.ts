import { Component } from '@angular/core';
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

  affiliatesIdList: number[] = [];
  testIdList: number[] = [];

  constructor(
    private affiliates: AffiliatesService, 
    private tests: TestsService
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
}
