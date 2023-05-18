import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/shared/components/dialogs/confirmation/confirmation.component';
import { ConfirmDialogData } from '../models/confirm-dialog-data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  confirmDialog(data: ConfirmDialogData): Observable<boolean> {
    return this.dialog.open(ConfirmationComponent,{
      data,
      width: '400px',
      disableClose: true
    }).afterClosed()
  }
}
