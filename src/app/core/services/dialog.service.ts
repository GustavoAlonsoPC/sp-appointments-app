import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/shared/components/dialogs/confirmation/confirmation.component';
import { ConfirmDialogData } from '../models/confirm-dialog-data.model';
import { Observable } from 'rxjs';
import { SuccessDialogData } from '../models/success-dialog-data.model';
import { SuccessComponent } from 'src/app/shared/components/dialogs/success/success.component';

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

  successDialog(data: SuccessDialogData): Observable<boolean> {
    return this.dialog.open(SuccessComponent, {
      data,
      width: '400px',
      disableClose: true
    }).afterClosed()
  }
}
