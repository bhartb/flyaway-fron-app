import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookurflightComponent } from './bookurflight.component';

describe('BookurflightComponent', () => {
  let component: BookurflightComponent;
  let fixture: ComponentFixture<BookurflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookurflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookurflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
