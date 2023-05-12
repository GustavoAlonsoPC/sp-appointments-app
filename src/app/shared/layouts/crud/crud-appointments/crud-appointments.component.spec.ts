import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAppointmentsComponent } from './crud-appointments.component';

describe('CrudAppointmentsComponent', () => {
  let component: CrudAppointmentsComponent;
  let fixture: ComponentFixture<CrudAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
