import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesEditComponent } from './affiliates-edit.component';

describe('AffiliatesEditComponent', () => {
  let component: AffiliatesEditComponent;
  let fixture: ComponentFixture<AffiliatesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliatesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
