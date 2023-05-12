import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crud-affiliates',
  templateUrl: './crud-affiliates.component.html',
  styleUrls: ['./crud-affiliates.component.css']
})
export class CrudAffiliatesComponent {
  
  @Input() newOrEdit = '';

  titleCrud = `Afiliados - ${this.newOrEdit} Afiliado`;
}
