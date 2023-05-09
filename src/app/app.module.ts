import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './screens/home/home.component';
import { TestsComponent } from './screens/tests/tests.component';
import { AffiliatesComponent } from './screens/affiliates/affiliates.component';
import { AppointmentsComponent } from './screens/appointments/appointments.component';
import { CrudAffiliatesComponent } from './screens/crud-affiliates/crud-affiliates.component';
import { CrudTestsComponent } from './screens/crud-tests/crud-tests.component';
import { CrudAppointmentsComponent } from './screens/crud-appointments/crud-appointments.component';
import { ListingComponent } from './shared/layouts/listing/listing.component';
import { CrudComponent } from './shared/layouts/crud/crud.component';
import { ViewHeaderComponent } from './shared/components/view-header/view-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TestsComponent,
    AffiliatesComponent,
    AppointmentsComponent,
    CrudAffiliatesComponent,
    CrudTestsComponent,
    CrudAppointmentsComponent,
    ListingComponent,
    CrudComponent,
    ViewHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
