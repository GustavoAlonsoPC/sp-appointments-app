import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-affiliates-form',
  templateUrl: './affiliates-form.component.html',
  styleUrls: ['./affiliates-form.component.css']
})
export class AffiliatesFormComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  name = '';
  age = 0;
}
