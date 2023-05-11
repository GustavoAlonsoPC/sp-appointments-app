import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from "@angular/material/core";
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {FlexLayoutModule} from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';



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
import { ViewHeaderComponent } from './shared/components/view-header/view-header.component';
import { MainListComponent } from './screens/home/main-list/main-list.component';
import { NestedListComponent } from './screens/home/main-list/nested-list/nested-list.component';
import { NewItemComponent } from './shared/components/new-item/new-item.component';
import { FiltersComponent } from './screens/home/filters/filters.component';
import { AffiliatesFormComponent } from './screens/crud-affiliates/affiliates-form/affiliates-form.component';

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
    ViewHeaderComponent,
    MainListComponent,
    NestedListComponent,
    NewItemComponent,
    FiltersComponent,
    AffiliatesFormComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
