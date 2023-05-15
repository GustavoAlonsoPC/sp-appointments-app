import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';
import { Test } from 'src/app/shared/models/test.model';
import { TestsService } from 'src/app/core/services/tests.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  allTests: Test[] = [];
  attrs = ['Id', 'Nombre', 'Descripción'];

  constructor(private service: TestsService) {}

  ngOnInit(): void {
    this.service.getAllTests().subscribe(data => {
      this.allTests = data;
    });
  }

  itemType(): Item<Test> {
    return {
      listingItems: this.allTests
    };
  }
}
