import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowflightbysourcdestnComponent } from './showflightbysourcdestn.component';

describe('ShowflightbysourcdestnComponent', () => {
  let component: ShowflightbysourcdestnComponent;
  let fixture: ComponentFixture<ShowflightbysourcdestnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowflightbysourcdestnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowflightbysourcdestnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
