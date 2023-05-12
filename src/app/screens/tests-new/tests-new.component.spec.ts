import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsNewComponent } from './tests-new.component';

describe('TestsNewComponent', () => {
  let component: TestsNewComponent;
  let fixture: ComponentFixture<TestsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
