import { Component, Input } from '@angular/core';
import { Test } from '../../models/test.model';
import { Affiliate } from '../../models/affiliate.model';
import { Appointment } from '../../models/appointment.model';
import { Item } from '../../models/item.model';

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
