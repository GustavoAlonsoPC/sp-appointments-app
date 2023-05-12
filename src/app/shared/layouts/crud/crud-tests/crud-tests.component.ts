import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crud-tests',
  templateUrl: './crud-tests.component.html',
  styleUrls: ['./crud-tests.component.css']
})
export class CrudTestsComponent {
  @Input() newOrEdit = '';

  titleCrud = `Pruebas - ${this.newOrEdit} Prueba`;
}
