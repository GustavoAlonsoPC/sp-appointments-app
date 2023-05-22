import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {

  filterForm: FormGroup;
  ids: number[] = [];

  constructor(
    private fb: FormBuilder,
    private homeS: HomeService
  ) {
    this.filterForm = this.fb.group({
      date: new FormControl(new Date()),
      idAff: ''
    });
  }
  ngOnInit(): void {
    this.homeS.ids$.subscribe(idxs => this.ids =  idxs)
  }
}
