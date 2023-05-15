import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-content-card',
  templateUrl: './no-content-card.component.html',
  styleUrls: ['./no-content-card.component.css']
})
export class NoContentCardComponent {
  @Input() pathLeftAction: string = '';
  @Input() pathRightAction: string = '';

  @Input() labelLeftAction: string = '';
  @Input() labelRightAction: string = '';
}
