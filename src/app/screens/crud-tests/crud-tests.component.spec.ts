import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTestsComponent } from './crud-tests.component';

describe('CrudTestsComponent', () => {
  let component: CrudTestsComponent;
  let fixture: ComponentFixture<CrudTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
