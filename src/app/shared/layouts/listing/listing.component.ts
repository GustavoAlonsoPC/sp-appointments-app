import { Component, Input } from '@angular/core';
import { Test } from '../../../core/models/test.model';
import { Affiliate } from '../../../core/models/affiliate.model';
import { Appointment } from '../../../core/models/appointment.model';
import { Item } from '../../../core/models/item.model';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ManagerService } from 'src/app/core/services/manager.service';
import { ConfirmDialogData } from 'src/app/core/models/confirm-dialog-data.model';
import { SuccessDialogData } from 'src/app/core/models/success-dialog-data.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {


  @Input() itemsAttr:string[] = [];

  @Input() items: Item<Test | Affiliate | Appointment> = {
    listingItems: []
  }

  @Input() context: string = '';

  constructor(
    private dialogService: DialogService,
    private manager: ManagerService
  ) {}

  getAttributeValues<T extends {}>(obj: T): T[] {
    return Object.values(obj)
  }

  public openConfirmDeletionDialog(id: number): void {
    this.dialogService.confirmDialog(DATA_DELETE_CONFIRMATION).subscribe(r => {
      if(!r) return;

      this.manager.delete(this.context, id)?.subscribe(r => {
        switch (r.status) {
          case 204:
            this.dialogService.successDialog(DATA_DELETE_SUCCESS).subscribe(r => {
              if(r) window.location.reload()
            })
            break;
        
          default:
            break;
        }
      })
    })
  }
}

const DATA_DELETE_CONFIRMATION: ConfirmDialogData = {
  title: 'Confirmar eliminación de registro',
  message: '¿Estás seguro(a)?',
  cancelText: 'No estoy seguro(a)',
  confirmText: "Sí, estoy seguro(a)"
}

const DATA_DELETE_SUCCESS: SuccessDialogData = {
  title: '¡Eliminación correcta!',
  message: 'Se ha eliminado correctamente el registro.',
  acceptText: 'Aceptar'
}

const DICTIONARY: {[key: string]: string} = {
  affiliates: 'afiliados',
  tests: 'pruebas',
  appointments: 'citas'
}