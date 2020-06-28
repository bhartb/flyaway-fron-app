import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsummarybyidComponent } from './bookingsummarybyid.component';

describe('BookingsummarybyidComponent', () => {
  let component: BookingsummarybyidComponent;
  let fixture: ComponentFixture<BookingsummarybyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsummarybyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsummarybyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
