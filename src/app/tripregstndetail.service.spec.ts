import { TestBed } from '@angular/core/testing';

import { TripregstndetailService } from './tripregstndetail.service';

describe('TripregstndetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripregstndetailService = TestBed.get(TripregstndetailService);
    expect(service).toBeTruthy();
  });
});
