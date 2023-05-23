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

const DATA_SAVE_CONFIRMATION: ConfirmDialogData = {
  title: 'Guardar registro',
  message: 'Estás a punto de guardar un nuevo registro, ¿seguro(a) de continuar?',
  confirmText: 'Continuar',
  cancelText: 'Cancelar'
}

const DATA_SAVE_SUCCESS: SuccessDialogData = {
  title: 'Guardado exitoso',
  message: 'Se ha guardado un nuevo registro',
  acceptText: 'Aceptar'
}

const DATA_SAVE_ERROR: ErrorDialogData = {
  title: 'Ha ocurrido un error',
  message: 'Tu registro no se ha podido guardar',
  acceptText: 'Aceptar'
}

const DATA_UPDATE_CONFIRMATION: ConfirmDialogData = {
  title: 'Actualizar registro',
  message: 'Estás a punto de actualizar un registro, ¿seguro(a) de continuar?',
  confirmText: 'Continuar',
  cancelText: 'Cancelar'
}

const DATA_UPDATE_SUCCESS: SuccessDialogData = {
  title: 'Actualización exitosa',
  message: 'Se ha actualizado el registro',
  acceptText: 'Aceptar'
}

const DATA_UPDATE_ERROR: ErrorDialogData = {
  title: 'Ha ocurrido un error',
  message: 'Tu registro no se ha podido actualizar',
  acceptText: 'Aceptar'
}

const DATA_FILTERS_ERROR: ErrorDialogData = {
  title: 'Sin Filtro',
  message: 'Está intentando filtrar por un campo vacío, seleccione un filtro válido',
  acceptText: 'Aceptar'
}

export {
  DATA_DELETE_SUCCESS, 
  DATA_DELETE_CONFIRMATION, 
  DATA_DELETE_ERROR,
  DATA_SAVE_CONFIRMATION,
  DATA_SAVE_SUCCESS,
  DATA_SAVE_ERROR,
  DATA_UPDATE_CONFIRMATION,
  DATA_UPDATE_ERROR,
  DATA_UPDATE_SUCCESS,
  DATA_FILTERS_ERROR
}