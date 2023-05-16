import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestsService } from 'src/app/core/services/tests.service';
import { Test } from 'src/app/shared/models/test.model';

@Component({
  selector: 'app-tests-edit',
  templateUrl: './tests-edit.component.html',
  styleUrls: ['./tests-edit.component.css']
})
export class TestsEditComponent implements OnInit {

  id: number | null = 0;
  test: Test = {id: 0, name: '', description: ''};
  constructor(
    private route: ActivatedRoute,
    private testsService: TestsService
    ) {
      
  }
  ngOnInit(): void{
    this.suscribeToData();
  }

  suscribeToData() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.testsService.getById(this.id).subscribe(t => {
      this.test = t;
    });
  }

}
