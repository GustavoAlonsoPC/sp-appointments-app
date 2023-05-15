import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { HomeDataSource } from 'src/app/shared/models/home-data-source.model';
import { HomeService } from 'src/app/core/services/home.service';
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

  tempTestName = '';

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
      console.log('DATA SOURCE before', this.dataSource)
      console.log('TABLE SOURCE',this.tableSource)
      console.log('DATA SOURCE after', this.dataSource)
     }
  ngOnInit(): void {
    
  }

  onAffClick(idAffiliate: number) {
  
    this.appointments.getByAffiliateId(idAffiliate).subscribe(data => {
      if (!data) {
        console.log('No appointments');
        return
      }
    
      this.tableSource.filter(aff => aff.id === idAffiliate)
        .forEach(aff => {
          if (aff.nestedData.length > 0) return;
          this.appointments.getByAffiliateId(idAffiliate).subscribe(data => {
            data.forEach(a => {
              aff.nestedData.push({
                id: a.id,
                dateAppointment: a.dateAppointment,
                hourAppointment: a.hourAppointment,
                testName: this.getTestName(a.idTest)
              });
            })
          })
        })
    });
    console.log(this.tableSource);
  }

  getTestName(idTest: number) {
    let nameT = ''
    this.tests.getById(idTest).subscribe(t => {
      nameT = t.name
    });
    return nameT;
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