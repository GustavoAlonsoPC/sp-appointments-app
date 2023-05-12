import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsEditComponent } from './appointments-edit.component';

describe('AppointmentsEditComponent', () => {
  let component: AppointmentsEditComponent;
  let fixture: ComponentFixture<AppointmentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
