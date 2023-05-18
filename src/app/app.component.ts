import { Component } from '@angular/core';
import { DialogService } from './core/services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sp-appointments-app';

  constructor(private dialogService: DialogService) {}

  
}
