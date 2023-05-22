import { Component, Injector, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Affiliate } from 'src/app/core/models/affiliate.model';
import { AbstractCrudForm } from 'src/app/core/base/abstract-crud-form';


@Component({
  selector: 'app-affiliates-form',
  templateUrl: './affiliates-form.component.html',
  styleUrls: ['./affiliates-form.component.css']
})
export class AffiliatesFormComponent extends AbstractCrudForm implements OnInit {

  @Input() data: Affiliate = {
    id: 0, name: '',
    age: 0, mail: ''
  }

  constructor(
    private fb: FormBuilder,
    private i: Injector
    ) {
    super(i);
  }
  ngOnInit(): void {
    this.form = this.initForm();
    this.register = <Affiliate> this.data;
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: new FormControl(this.data.name, [Validators.required]),
      mail: new FormControl(this.data.mail, [Validators.email, Validators.required]),
      age: new FormControl(this.data.age, [Validators.required, Validators.min(0)]),
    })
  }
}
