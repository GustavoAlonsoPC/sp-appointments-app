import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DialogService } from 'src/app/core/services/dialog.service';
import { HomeService } from 'src/app/core/services/home.service';
import { DATA_FILTERS_ERROR } from 'src/app/core/utils/dialogs-data';

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
    private dialog: DialogService,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  ngOnInit(): void {
    this.homeS.ids$.subscribe(idxs => this.ids =  idxs)
  }

  filterByDate() {
    let d = this.getDate()
    if(d === 'N/A') this.dialog.errorDialog(DATA_FILTERS_ERROR).subscribe(r => {if(r) window.location.reload()})
    else this.homeS.emitDataByFilterDate(d)
    
  }

  filterByIdAff() {
    let id = Number(this.idAff.value)
    if(id !== 0) this.homeS.emitDataByFilterId(id)
    else this.dialog.errorDialog(DATA_FILTERS_ERROR).subscribe(r => {if(r) window.location.reload()})
  }

  getDate() {
    if(!this.date.value) return 'N/A';
    return formatDate(this.date.value, 'dd/MM/yyyy', this.locale)
  }
}
