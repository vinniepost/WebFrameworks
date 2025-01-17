import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTimeComponent } from './display-time.component';

describe('DisplayTimeComponent', () => {
  let component: DisplayTimeComponent;
  let fixture: ComponentFixture<DisplayTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTimeComponent]
    });
    fixture = TestBed.createComponent(DisplayTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
