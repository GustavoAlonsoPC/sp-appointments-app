import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { HomeDataSource } from 'src/app/shared/models/home-data-source.model';
import { AffiliatesService } from 'src/app/core/services/affiliates.service';
import { AppointmentsService } from 'src/app/core/services/appointments.service';
import { TestsService } from 'src/app/core/services/tests.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
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

  columnHeaders: {[key: string]: string} = {
    id: 'Id',
    name: 'Nombre de afiliado',
    age: 'Edad',
    mail: 'Correo electrónico'
  }

  testsNames: {[key: number]: string} = { }

  constructor(
    private affiliates: AffiliatesService,
    private appointments: AppointmentsService,
    private tests: TestsService
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
      })
     }
  ngOnInit(): void {
    this.tests.getAll().subscribe(all => {
      all.forEach(t => this.testsNames[t.id] = t.name)
    })
  }

  onAffClick(idAffiliate: number) {
  
    this.appointments.getByAffiliateId(idAffiliate).subscribe(data => {
      if (!data) return
    
      this.tableSource.filter(aff => aff.id === idAffiliate)
        .forEach(aff => {
          if (aff.nestedData.length > 0) return;
          this.appointments.getByAffiliateId(idAffiliate).subscribe(data => {
            data.forEach(a => {
              console.log(this.testsNames)
              aff.nestedData.push({
                id: a.id,
                dateAppointment: a.dateAppointment,
                hourAppointment: a.hourAppointment,
                testName: this.testsNames[a.idTest]
              });
            })
          })
        })
    });
    console.log(this.tableSource);
  }
}
/* 
const ELEMENT_DATA: HomeDataSource[] = [
  {
    id: 1,
    name: 'Aff1',
    mail: 'aff1@mail.com',
    age: 24,
    nestedData: [
      {
        id: 1,
        dateAppointment: new Date(),
        hourAppointment: '12:00',
        testName: 'test1'
      }
    ]
  },
  {
    id: 2,
    name: 'Aff2',
    mail: 'aff2@mail.com',
    age: 45,
    nestedData: [
      {
        id: 2,
        dateAppointment: new Date(),
        hourAppointment: '12:00',
        testName: 'test2'
      }
    ]
  },
  {
    id: 3,
    name: 'Aff3',
    mail: 'aff3@mail.com',
    age: 98,
    nestedData: [
      {
        id: 3,
        dateAppointment: new Date(),
        hourAppointment: '12:00',
        testName: 'test3'
      }
    ]
  }
];
 */