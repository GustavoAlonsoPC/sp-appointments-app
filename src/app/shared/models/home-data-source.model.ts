import { Affiliate } from "./affiliate.model";
import { CustomAppointmentsDetails } from "./custom-appointments-detals.model";

export interface HomeDataSource extends Affiliate {
  nestedData: CustomAppointmentsDetails[];
}