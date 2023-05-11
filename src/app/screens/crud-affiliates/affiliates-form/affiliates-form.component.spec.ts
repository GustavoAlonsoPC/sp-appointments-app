import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesFormComponent } from './affiliates-form.component';

describe('AffiliatesFormComponent', () => {
  let component: AffiliatesFormComponent;
  let fixture: ComponentFixture<AffiliatesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliatesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
