import { FormBuilder, FormGroup } from "@angular/forms";
import { Affiliate } from "../models/affiliate.model";
import { Appointment } from "../models/appointment.model";
import { Test } from "../models/test.model";
import { ManagerService } from "../services/manager.service";
import { DialogService } from "../services/dialog.service";
import { Router } from "@angular/router";
import { DATA_SAVE_CONFIRMATION, DATA_SAVE_ERROR, DATA_SAVE_SUCCESS, DATA_UPDATE_CONFIRMATION, DATA_UPDATE_ERROR, DATA_UPDATE_SUCCESS } from "../utils/dialogs-data";

export abstract class AbstractCrudForm {
  register!: Test | Affiliate | Appointment;

  form!: FormGroup;

  constructor(
    private service: ManagerService,
    private dialog: DialogService,
    private router: Router
  ) {}

  abstract initForm(): FormGroup;

  onSubmit(context: string) {
    if (this.register.id === 0) {
      this.dialog.confirmDialog(DATA_SAVE_CONFIRMATION).subscribe(r => {
        if (!r) return;

        this.service.save(context, this.form.value).subscribe({next: (r) => {
            if(r) this.dialog.successDialog(DATA_SAVE_SUCCESS).subscribe(s => {if(s) this.redirect(`/${context}`)})
          }, error: (e) => {
            console.log(e)
            this.dialog.errorDialog(DATA_SAVE_ERROR).subscribe(s => {if(s) this.redirect(`/${context}`)})
          }
        })
      })
    } else {
      this.dialog.confirmDialog(DATA_UPDATE_CONFIRMATION).subscribe(r => {
        if (!r) return;

        this.service.update(context, this.form.value, this.register.id).subscribe({next: (r) => {
            if(r) this.dialog.successDialog(DATA_UPDATE_SUCCESS).subscribe(s => {if(s) this.redirect(`/${context}`)})
          }, error: (e) => {
            console.log(e)
            this.dialog.errorDialog(DATA_UPDATE_ERROR).subscribe(s => {if(s) this.redirect(`/${context}`)})
          }
        })
      })
    }
  }
  
  redirect = (path: string) => this.router.navigate([path]);
}