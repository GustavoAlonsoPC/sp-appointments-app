import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-affiliates-form',
  templateUrl: './affiliates-form.component.html',
  styleUrls: ['./affiliates-form.component.css']
})
export class AffiliatesFormComponent implements OnInit {

  name = '';
  age = 0;

  affiliateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.affiliateForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.email, Validators.required]),
      age: new FormControl(0, [Validators.required, Validators.min(0)]),
    })
  }
}
