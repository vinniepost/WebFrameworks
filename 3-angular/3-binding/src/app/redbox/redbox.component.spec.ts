import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedboxComponent } from './redbox.component';

describe('RedboxComponent', () => {
  let component: RedboxComponent;
  let fixture: ComponentFixture<RedboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedboxComponent]
    });
    fixture = TestBed.createComponent(RedboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
