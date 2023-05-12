import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { AppointmentsComponent } from './screens/appointments/appointments.component';
import { TestsComponent } from './screens/tests/tests.component';
import { AffiliatesComponent } from './screens/affiliates/affiliates.component';
import { AffiliatesNewComponent } from './screens/affiliates-new/affiliates-new.component';
import { AppointmentsNewComponent } from './screens/appointments-new/appointments-new.component';
import { TestsNewComponent } from './screens/tests-new/tests-new.component';

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
    component: AppointmentsNewComponent
  },
  {
    path: 'affiliates/new',
    component: AffiliatesNewComponent
  },
  {
    path: 'tests/new',
    component: TestsNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
