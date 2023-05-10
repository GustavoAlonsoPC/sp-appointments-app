import { Component, Input } from '@angular/core';
import { CustomAppointmentsDetails } from 'src/app/shared/models/custom-appointments-detals.model';

@Component({
  selector: 'app-nested-list',
  templateUrl: './nested-list.component.html',
  styleUrls: ['./nested-list.component.css']
})
export class NestedListComponent {

  @Input() nestedData: CustomAppointmentsDetails[] = [];
  displayedColumns = ['id', 'dateAppointment', 'hourAppointment', 'testName'];
}
