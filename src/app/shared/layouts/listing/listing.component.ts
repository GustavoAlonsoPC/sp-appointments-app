import { Component, Input } from '@angular/core';
import { Test } from '../../../core/models/test.model';
import { Affiliate } from '../../../core/models/affiliate.model';
import { Appointment } from '../../../core/models/appointment.model';
import { Item } from '../../../core/models/item.model';

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

  getAttributeValues<T extends {}>(obj: T): T[] {
    return Object.values(obj)
  }
}
