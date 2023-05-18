import { Component, Input } from '@angular/core';
import { Test } from '../../../core/models/test.model';
import { Affiliate } from '../../../core/models/affiliate.model';
import { Appointment } from '../../../core/models/appointment.model';
import { Item } from '../../../core/models/item.model';
import { DialogService } from 'src/app/core/services/dialog.service';

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

  @Input() pathLink: string = '';

  constructor(private dialogService: DialogService) {}

  getAttributeValues<T extends {}>(obj: T): T[] {
    return Object.values(obj)
  }

  public openDialog(): void {
    this.dialogService.confirmDialog({
      title: 'Confirm Action',
      message: 'Are you sure?',
      cancelText: 'Not Sure',
      confirmText: "Yes, I'm sure"
    }).subscribe(r => console.log(r))
  }
}
