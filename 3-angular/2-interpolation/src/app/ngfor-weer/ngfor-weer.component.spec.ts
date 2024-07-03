import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforWeerComponent } from './ngfor-weer.component';

describe('NgforWeerComponent', () => {
  let component: NgforWeerComponent;
  let fixture: ComponentFixture<NgforWeerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgforWeerComponent]
    });
    fixture = TestBed.createComponent(NgforWeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
