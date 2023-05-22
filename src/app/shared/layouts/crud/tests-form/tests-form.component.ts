import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TestsService } from 'src/app/core/services/tests/tests.service';
import { Test } from 'src/app/core/models/test.model';
import { DialogService } from 'src/app/core/services/dialog.service';
import { Router } from '@angular/router';
import { DATA_SAVE_CONFIRMATION, DATA_SAVE_ERROR, DATA_SAVE_SUCCESS, DATA_UPDATE_CONFIRMATION, DATA_UPDATE_ERROR, DATA_UPDATE_SUCCESS } from 'src/app/core/utils/dialogs-data';

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

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: TestsService,
    private dialog: DialogService,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.form = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: new FormControl(this.register.name, [Validators.required]),
      description: new FormControl(this.register.description, [Validators.required, Validators.maxLength(100)])
    })
  }

  onSubmit() {
    if (this.register.id === 0) {
      this.dialog.confirmDialog(DATA_SAVE_CONFIRMATION).subscribe(r => {
        if (!r) return;

        this.service.save(this.form.value).subscribe({next: (r) => {
            if(r) this.dialog.successDialog(DATA_SAVE_SUCCESS).subscribe(s => {if(s) this.redirect()})
          }, error: (e) => {
            console.log(e)
            this.dialog.errorDialog(DATA_SAVE_ERROR).subscribe(s => {if(s) this.redirect()})
          }
        })
      })
    } else {
      this.dialog.confirmDialog(DATA_UPDATE_CONFIRMATION).subscribe(r => {
        if (!r) return;

        this.service.update(this.form.value, this.register.id).subscribe({next: (r) => {
            if(r) this.dialog.successDialog(DATA_UPDATE_SUCCESS).subscribe(s => {if(s) this.redirect()})
          }, error: (e) => {
            console.log(e)
            this.dialog.errorDialog(DATA_UPDATE_ERROR).subscribe(s => {if(s) this.redirect()})
          }
        })
      })
    }
  }
  redirect = () => this.router.navigate(['/tests']);
}
