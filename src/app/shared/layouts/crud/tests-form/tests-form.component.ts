import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Test } from 'src/app/core/models/test.model';
import { AbstractCrudForm } from 'src/app/core/base/abstract-crud-form';

@Component({
  selector: 'app-tests-form',
  templateUrl: './tests-form.component.html',
  styleUrls: ['./tests-form.component.css']
})
export class TestsFormComponent extends AbstractCrudForm implements OnInit {

  @Input() data: Test = {
    id: 0,
    name: '',
    description: ''
  }

  constructor(
    private fb: FormBuilder,
    private i: Injector
    ) {
    super(i);
  }
  ngOnInit(): void {
    this.form = this.initForm();
    this.register = <Test> this.data;
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: new FormControl(this.data.name, [Validators.required]),
      description: new FormControl(this.data.description, [Validators.required, Validators.maxLength(100)])
    })
  }
}
