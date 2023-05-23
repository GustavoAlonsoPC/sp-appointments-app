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
  filteredSource: HomeDataSource[] = [];

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
        this.dataSource = this.tableSource.slice(0)
      });
      const ids = data.map(a => a.id);
      this.homeS.emitIds(ids);
    })
  }
  ngOnInit(): void {
    this.tests.getAll().subscribe(all => {
      all.forEach(t => this.testsNames[t.id] = t.name)
    })

    this.homeS.idsFilter$.subscribe(r => {
      console.log('from main list r', r)
      //if(!r || r.length === 0) return;
      this.filteredSource = this.tableSource.filter(hds => r.includes(hds.id))
      console.log('Filtered source', this.filteredSource)
      this.dataSource = this.filteredSource.slice(0)
    })

    this.homeS.idAffFilter$.subscribe(n => {
      if(!n || n === 0) return;
      this.filteredSource = this.tableSource.filter(hds => hds.id === n)
      if(this.filteredSource.length !== 0) this.dataSource = this.filteredSource.slice(0)
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

          if(this.filteredSource.length > 0) {
            this.homeS.dateFilter$.subscribe(d => {
              if(d === '') return
              aff.nestedData = aff.nestedData.filter(a => a.dateAppointment === d)
            })
          }
        })
      })
  }
}
