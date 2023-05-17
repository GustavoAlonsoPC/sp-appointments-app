import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AffiliatesService } from 'src/app/core/services/affiliates.service';
import { Affiliate } from 'src/app/shared/models/affiliate.model';


@Component({
  selector: 'app-affiliates-form',
  templateUrl: './affiliates-form.component.html',
  styleUrls: ['./affiliates-form.component.css']
})
export class AffiliatesFormComponent implements OnInit {

  @Input() register: Affiliate = {
    id: 0, name: '',
    age: 0, mail: ''
  }

  affiliateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AffiliatesService
    ) {}
  ngOnInit(): void {
    this.affiliateForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: new FormControl(this.register.name, [Validators.required]),
      mail: new FormControl(this.register.mail, [Validators.email, Validators.required]),
      age: new FormControl(this.register.age, [Validators.required, Validators.min(0)]),
    })
  }

  onSubmit() {
    if (this.register.id === 0) this.service.save(this.affiliateForm.value).subscribe(r => console.log(r))
    else this.service.update(this.affiliateForm.value, this.register.id).subscribe(r => console.log(r))
  }
}
