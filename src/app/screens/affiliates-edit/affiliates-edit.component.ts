import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AffiliatesService } from 'src/app/core/services/affiliates.service';
import { Affiliate } from 'src/app/shared/models/affiliate.model';

@Component({
  selector: 'app-affiliates-edit',
  templateUrl: './affiliates-edit.component.html',
  styleUrls: ['./affiliates-edit.component.css']
})
export class AffiliatesEditComponent implements OnInit {

  id: number | null = 0;
  affiliate: Affiliate = {
    id: 0, name: '',
    age: 0, mail: ''
  }

  constructor(
    private route: ActivatedRoute,
    private affiliateService: AffiliatesService
  ) {}
  ngOnInit(): void {
    this.suscribeToData();
  }
  suscribeToData() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.affiliateService.getById(this.id).subscribe(t => {
      this.affiliate = t;
    })
  }


}
