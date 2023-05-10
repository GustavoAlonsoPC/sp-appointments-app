import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { HomeDataSource } from 'src/app/shared/models/home-data-source.model';

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
export class MainListComponent {
  dataSource = ELEMENT_DATA;
  displayedColumns = ['id', 'name', 'age', 'mail'];
  columnsToDisplayWithExpand = ['expand', ...this.displayedColumns];
  expandedElement!: HomeDataSource | null;
}

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
