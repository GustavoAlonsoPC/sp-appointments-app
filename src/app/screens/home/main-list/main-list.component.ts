import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Affiliate } from 'src/app/shared/models/affiliate.model';
import { MatTableDataSource } from '@angular/material/table';
import { elementAt } from 'rxjs';

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
  /* dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null; */
 /*  dataSource = new MatTableDataSource<MyData>(MY_DATA);
  displayedColumns = ['name', 'age'];
  expandedElement!: MyData | null;

  toggleRow(element: MyData) {
    this.expandedElement = this.expandedElement === element ? null : element;
  } */
  dataSource = ELEMENT_DATA;
  displayedColumns = ['id', 'name', 'age', 'mail'];
  columnsToDisplayWithExpand = ['expand', ...this.displayedColumns];
  expandedElement!: DataSource | null;
}

export interface DataSource extends Affiliate {
  nestedData: CustomAppointmentsDetails[];
}

export interface CustomAppointmentsDetails {
  id: number;
  dateAppointment: Date;
  hourAppointment: string;
  testName: string;
}

const ELEMENT_DATA: DataSource[] = [
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

/* 
export interface MyData {
  name: string;
  age: number;
}

const MY_DATA: MyData[] = [
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 35},
  {name: 'Charlie', age: 58},
]
 */
/* 
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
];

export interface CustomAppointmentDetails {
  id: number;
  dateAppointment: Date;
  hourAppointment: string;
  testName: string;
}

const ELEMENT_DATA_AFF: Affiliate[] = [
  {
    id: 1,
    name: 'aff1',
    mail: 'aff1@mail.com',
    age: 50
  },
  {
    id: 2,
    name: 'aff2',
    mail: 'aff2@mail.com',
    age: 51
  },
  {
    id: 3,
    name: 'aff3',
    mail: 'aff3@mail.com',
    age: 52
  }
]

const ELEMENT_DATA_APP: CustomAppointmentDetails[] = [
  {
    
      id: 1,
      dateAppointment: new Date(),
      hourAppointment: '12:00',
      testName: 'test1'
  },
  {
      id: 2,
      dateAppointment: new Date(),
      hourAppointment: '12:00',
      testName: 'test2'
  },
  {
      id: 3,
      dateAppointment: new Date(),
      hourAppointment: '12:00',
      testName: 'test3'
  },
]
 */