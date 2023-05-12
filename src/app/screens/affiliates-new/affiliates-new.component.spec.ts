import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesNewComponent } from './affiliates-new.component';

describe('AffiliatesNewComponent', () => {
  let component: AffiliatesNewComponent;
  let fixture: ComponentFixture<AffiliatesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatesNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliatesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
