import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TestsService } from 'src/app/core/services/tests/tests.service';
import { Test } from 'src/app/core/models/test.model';
import { DialogService } from 'src/app/core/services/dialog.service';
import { Router } from '@angular/router';
import { DATA_SAVE_CONFIRMATION, DATA_SAVE_ERROR, DATA_SAVE_SUCCESS, DATA_UPDATE_CONFIRMATION, DATA_UPDATE_ERROR, DATA_UPDATE_SUCCESS } from 'src/app/core/utils/dialogs-data';
import { AbstractCrudForm } from 'src/app/core/base/abstract-crud-form';
import { ManagerService } from 'src/app/core/services/manager.service';
import { MatDialog } from '@angular/material/dialog';

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
    private s: ManagerService,
    d: DialogService
    ) {
    super(s, d, new Router());
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

  /* onSubmit() {
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
  redirect = () => this.router.navigate(['/tests']); */
}
