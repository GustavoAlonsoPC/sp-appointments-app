import { Component, Input } from '@angular/core';
import { Test } from '../../../core/models/test.model';
import { Affiliate } from '../../../core/models/affiliate.model';
import { Appointment } from '../../../core/models/appointment.model';
import { Item } from '../../../core/models/item.model';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ManagerService } from 'src/app/core/services/manager.service';
import { catchError, throwError } from 'rxjs';
import { DATA_DELETE_CONFIRMATION, DATA_DELETE_ERROR, DATA_DELETE_SUCCESS } from 'src/app/core/utils/dialogs-data';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {


  @Input() itemsAttr:string[] = [];

  @Input() items: Item<Test | Affiliate | Appointment> = {
    listingItems: []
  }

  @Input() context: string = '';

  constructor(
    private dialogService: DialogService,
    private manager: ManagerService
  ) {}

  getAttributeValues<T extends {}>(obj: T): T[] {
    return Object.values(obj)
  }

  public openConfirmDeletionDialog(id: number): void {
    this.dialogService.confirmDialog(DATA_DELETE_CONFIRMATION).subscribe(r => {
      if(!r) return;

      this.manager.delete(this.context, id)?.pipe(
        catchError(() => throwError(() => new Error('An error ocurred')))
      )
      .subscribe({next: (r) => {
        this.dialogService.successDialog(DATA_DELETE_SUCCESS).subscribe(s => {
          if(s) window.location.reload()
        })
      }, error: (err) => {
        this.dialogService.errorDialog(DATA_DELETE_ERROR).subscribe(s => {if(s) window.location.reload()})
      }})
    })
  }
}
