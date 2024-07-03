import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinceStartComponent } from './since-start.component';

describe('SinceStartComponent', () => {
  let component: SinceStartComponent;
  let fixture: ComponentFixture<SinceStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinceStartComponent]
    });
    fixture = TestBed.createComponent(SinceStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
