import { Component } from '@angular/core';
import { Affiliate } from 'src/app/shared/models/affiliate.model';
import { Item } from 'src/app/shared/models/item.model';
import { AffiliatesService } from 'src/app/core/services/affiliates.service';

@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  styleUrls: ['./affiliates.component.css']
})
export class AffiliatesComponent {

  allAffiliates: Affiliate[] = [];
  attrs = ['Id', 'Nombre', 'Edad', 'Correo'];

  constructor(private service: AffiliatesService) {}

  ngOnInit(): void {
    this.service.getAllAffiliates().subscribe(data => {
      this.allAffiliates = data;
    });
  }

  itemType(): Item<Affiliate> {
    return {
      listingItems: this.allAffiliates
    };
  }
}
