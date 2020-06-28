import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightidComponent } from './flightid.component';

describe('FlightidComponent', () => {
  let component: FlightidComponent;
  let fixture: ComponentFixture<FlightidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
