import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HomeDataSource } from 'src/app/core/models/home-data-source.model';
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

  constructor(private homeS: HomeService) { }

  ngOnInit(): void {
    this.homeS.affiliates$.subscribe(data => {
      this.tableSource = data.map((aff) => ({
        id: aff.id,
        name: aff.name,
        mail: aff.mail,
        age: aff.age,
        nestedData: []
      }))
      this.dataSource = this.tableSource.slice(0);
    });

  }

  onAffClick(idAffiliate: number) {
    this.tableSource.filter(aff => aff.id === idAffiliate).forEach(aff => {
      if (aff.nestedData.length > 0) return;

      this.homeS.appointments$.subscribe(apps => {
        this.homeS.tests$.subscribe(tests => {
          const asociatedAppointments = apps.filter(a => a.idAffiliate === aff.id);
          aff.nestedData = asociatedAppointments.map(a => {
            const asociatedTest = tests.filter(t => t.id === a.idTest)[0];
            return {
              id: a.id,
              dateAppointment: a.dateAppointment,
              hourAppointment: a.hourAppointment,
              testName: asociatedTest.name
            }
          })
        })
      })
    })
  }
}
