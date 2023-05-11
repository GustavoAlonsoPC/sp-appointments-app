import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { AppointmentsComponent } from './screens/appointments/appointments.component';
import { TestsComponent } from './screens/tests/tests.component';
import { AffiliatesComponent } from './screens/affiliates/affiliates.component';
import { CrudAppointmentsComponent } from './screens/crud-appointments/crud-appointments.component';
import { CrudAffiliatesComponent } from './screens/crud-affiliates/crud-affiliates.component';
import { CrudTestsComponent } from './screens/crud-tests/crud-tests.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
  },
  {
    path: 'tests',
    component: TestsComponent
  },
  {
    path: 'affiliates',
    component: AffiliatesComponent
  },
  {
    path: 'appointments/new',
    component: CrudAppointmentsComponent
  },
  {
    path: 'affiliates/new',
    component: CrudAffiliatesComponent
  },
  {
    path: 'tests/new',
    component: CrudTestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
