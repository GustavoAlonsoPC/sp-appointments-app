import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TestsService } from 'src/app/core/services/tests/tests.service';
import { Test } from 'src/app/core/models/test.model';
import { DialogService } from 'src/app/core/services/dialog.service';
import { Router } from '@angular/router';

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
    private service: TestsService,
    private dialog: DialogService,
    private router: Router
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
    if (this.register.id === 0) {
      this.dialog.confirmDialog({
        title: 'Guardar registro',
        message: 'Estás a punto de guardar un nuevo registro, ¿seguro(a) de continuar?',
        confirmText: 'Continuar',
        cancelText: 'Cancelar'
      }).subscribe(r => {
        if (!r) return;

        this.service.save(this.testForm.value).subscribe({next: (r) => {
            if(r) this.dialog.successDialog({
              title: 'Guardado exitoso',
              message: 'Se ha guardado un nuevo registro',
              acceptText: 'Aceptar'
            }).subscribe(s => {if(s) this.redirect()})
          }, error: (e) => {
            console.log(e)
            this.dialog.errorDialog({
              title: 'Ha ocurrido un error',
              message: 'Tu registro no se ha podido guardar',
              acceptText: 'Aceptar'
            }).subscribe(s => {if(s) this.redirect()})
          }
        })
      })
    } else {
      //this.service.update(this.testForm.value, this.register.id).subscribe()
      this.dialog.confirmDialog({
        title: 'Actualizar registro',
        message: 'Estás a punto de actualizar un registro, ¿seguro(a) de continuar?',
        confirmText: 'Continuar',
        cancelText: 'Cancelar'
      }).subscribe(r => {
        if (!r) return;

        this.service.update(this.testForm.value, this.register.id).subscribe({next: (r) => {
            if(r) this.dialog.successDialog({
              title: 'Actualización exitosa',
              message: 'Se ha actualizado el registro',
              acceptText: 'Aceptar'
            }).subscribe(s => {if(s) this.redirect()})
          }, error: (e) => {
            console.log(e)
            this.dialog.errorDialog({
              title: 'Ha ocurrido un error',
              message: 'Tu registro no se ha podido actualizar',
              acceptText: 'Aceptar'
            }).subscribe(s => {if(s) this.redirect()})
          }
        })
      })
    }
  }
  redirect = () => this.router.navigate(['/tests']);
}
