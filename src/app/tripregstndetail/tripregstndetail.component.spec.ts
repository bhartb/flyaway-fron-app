import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripregstndetailComponent } from './tripregstndetail.component';

describe('TripregstndetailComponent', () => {
  let component: TripregstndetailComponent;
  let fixture: ComponentFixture<TripregstndetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripregstndetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripregstndetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
