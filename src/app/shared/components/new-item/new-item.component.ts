import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {

  @Input() pathLink: string = '';
  @Input() itemName: string = '';
}
