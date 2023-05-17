import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TestsService } from 'src/app/core/services/tests.service';
import { Test } from 'src/app/shared/models/test.model';

@Component({
  selector: 'app-tests-form',
  templateUrl: './tests-form.component.html',
  styleUrls: ['./tests-form.component.css']
})
export class TestsFormComponent implements OnInit {

  @Input() register: Test = {
    id: 0,
    name: '',
    description: ''
  }

  testForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: TestsService
    ) {}
  ngOnInit(): void {
    this.testForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: new FormControl(this.register.name, [Validators.required]),
      description: new FormControl(this.register.description, [Validators.required, Validators.maxLength(100)])
    })
  }

  onSubmit() {
    if (this.register.id === 0) this.service.save(this.testForm.value).subscribe(r => console.log(r))
    else this.service.update(this.testForm.value, this.register.id).subscribe(r => console.log(r))
  }
}
