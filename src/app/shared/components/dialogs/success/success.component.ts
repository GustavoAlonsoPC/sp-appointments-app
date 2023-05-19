import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SuccessDialogData } from 'src/app/core/models/success-dialog-data.model';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  constructor(
    public dialogRef: MatDialogRef<SuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SuccessDialogData
  ){

  }
}
