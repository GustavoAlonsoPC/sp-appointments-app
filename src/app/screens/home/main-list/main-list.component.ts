import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HomeDataSource } from 'src/app/core/models/home-data-source.model';
import { AffiliatesService } from 'src/app/core/services/affiliates/affiliates.service';
import { AppointmentsService } from 'src/app/core/services/appointments/appointments.service';
import { TestsService } from 'src/app/core/services/tests/tests.service';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class MainListComponent implements OnInit {
  dataSource!: HomeDataSource[];
  displayedColumns = ['id', 'name', 'age', 'mail'];
  columnsToDisplayWithExpand = ['expand', ...this.displayedColumns];
  expandedElement!: HomeDataSource | null;

  tableSource: HomeDataSource[] = [];

  columnHeaders: { [key: string]: string } = {
    id: 'Id',
    name: 'Nombre de afiliado',
    age: 'Edad',
    mail: 'Correo electrónico'
  }

  testsNames: { [key: number]: string } = {}

  constructor(
    private affiliates: AffiliatesService,
    private appointments: AppointmentsService,
    private tests: TestsService,
    private homeS: HomeService
  ) {
    this.affiliates.getAll().subscribe(data => {
      data.forEach(aff => {
        this.tableSource.push({
          id: aff.id,
          name: aff.name,
          mail: aff.mail,
          age: aff.age,
          nestedData: []
        })
        this.dataSource = this.tableSource
      });
      const ids = data.map(a => a.id);
      this.homeS.emitIds(ids);
    })
  }
  ngOnInit(): void {
    this.tests.getAll().subscribe(all => {
      all.forEach(t => this.testsNames[t.id] = t.name)
    })
  }

  onAffClick(idAffiliate: number) {

    this.tableSource.filter(aff => aff.id === idAffiliate)
      .forEach(aff => {
        if (aff.nestedData.length > 0) return;

        this.appointments.getByAffiliateId(idAffiliate).subscribe(data => {
          if (!data) return;

          data.forEach(a => {
            aff.nestedData.push({
              id: a.id,
              dateAppointment: a.dateAppointment,
              hourAppointment: a.hourAppointment,
              testName: this.testsNames[a.idTest]
            })
          })
        })
      })
  }
}
