import { ConfirmDialogData } from "../models/confirm-dialog-data.model";
import { SuccessDialogData } from "../models/success-dialog-data.model";
import { ErrorDialogData } from "../models/error-dialog-data.model";

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

const DATA_DELETE_ERROR: ErrorDialogData = {
  title: 'Imposible eliminar',
  message: 'El registro que quieres eliminar está asociado a varias citas. Elimina esas citas para poder borrar este registro!',
  acceptText: 'Aceptar',
  actionText: 'Ir a citas'
}

export {DATA_DELETE_SUCCESS, DATA_DELETE_CONFIRMATION, DATA_DELETE_ERROR}