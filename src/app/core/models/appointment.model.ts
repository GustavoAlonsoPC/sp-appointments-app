import { CrudAppointment } from "./crud-appointment.model";

export interface Appointment extends CrudAppointment {
    id: number;
}