import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tests-form',
  templateUrl: './tests-form.component.html',
  styleUrls: ['./tests-form.component.css']
})
export class TestsFormComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  name = '';
  description = '';
}
