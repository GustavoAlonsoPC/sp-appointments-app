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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './screens/home/home.component';
import { TestsComponent } from './screens/tests/tests.component';
import { AffiliatesComponent } from './screens/affiliates/affiliates.component';
import { AppointmentsComponent } from './screens/appointments/appointments.component';
import { ListingComponent } from './shared/layouts/listing/listing.component';
import { ViewHeaderComponent } from './shared/components/view-header/view-header.component';
import { MainListComponent } from './screens/home/main-list/main-list.component';
import { NestedListComponent } from './screens/home/main-list/nested-list/nested-list.component';
import { NewItemComponent } from './shared/components/new-item/new-item.component';
import { FiltersComponent } from './screens/home/filters/filters.component';
import { AffiliatesFormComponent } from './shared/layouts/crud/affiliates-form/affiliates-form.component';
import { TestsFormComponent } from './shared/layouts/crud/tests-form/tests-form.component';
import { AppointmentsFormComponent } from './shared/layouts/crud/appointments-form/appointments-form.component';
import { AffiliatesNewComponent } from './screens/affiliates-new/affiliates-new.component';
import { AffiliatesEditComponent } from './screens/affiliates-edit/affiliates-edit.component';
import { AppointmentsNewComponent } from './screens/appointments-new/appointments-new.component';
import { AppointmentsEditComponent } from './screens/appointments-edit/appointments-edit.component';
import { TestsNewComponent } from './screens/tests-new/tests-new.component';
import { TestsEditComponent } from './screens/tests-edit/tests-edit.component';
import { NoContentCardComponent } from './shared/components/no-content-card/no-content-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TestsComponent,
    AffiliatesComponent,
    AppointmentsComponent,
    ListingComponent,
    ViewHeaderComponent,
    MainListComponent,
    NestedListComponent,
    NewItemComponent,
    FiltersComponent,
    AffiliatesFormComponent,
    TestsFormComponent,
    AppointmentsFormComponent,
    AffiliatesNewComponent,
    AffiliatesEditComponent,
    AppointmentsNewComponent,
    AppointmentsEditComponent,
    TestsNewComponent,
    TestsEditComponent,
    NoContentCardComponent
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
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
