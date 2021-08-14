import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditFlightComponent } from './popup-edit-flight.component';

describe('PopupEditFlightComponent', () => {
  let component: PopupEditFlightComponent;
  let fixture: ComponentFixture<PopupEditFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
