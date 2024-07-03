import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifRandomComponent } from './ngif-random.component';

describe('NgifRandomComponent', () => {
  let component: NgifRandomComponent;
  let fixture: ComponentFixture<NgifRandomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgifRandomComponent]
    });
    fixture = TestBed.createComponent(NgifRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
