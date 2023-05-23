import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {

  ids: number[] = [];
  date: FormControl = new FormControl()
  idAff: FormControl = new FormControl()

  constructor(
    private homeS: HomeService,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  ngOnInit(): void {
    this.homeS.ids$.subscribe(idxs => this.ids =  idxs)
  }

  filterByDate() {
    let d = this.getDate()
    console.log('Sent date: ', d)
    this.homeS.emitIdsFilterDate(d)
    this.homeS.idsFilter$.subscribe(r => console.log('Ids sent', r))
  }

  getDate() {
    return formatDate(this.date.value, 'dd/MM/yyyy', this.locale)
  }
}
