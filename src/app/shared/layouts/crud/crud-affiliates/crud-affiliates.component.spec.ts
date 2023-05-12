import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAffiliatesComponent } from './crud-affiliates.component';

describe('CrudAffiliatesComponent', () => {
  let component: CrudAffiliatesComponent;
  let fixture: ComponentFixture<CrudAffiliatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAffiliatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAffiliatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
