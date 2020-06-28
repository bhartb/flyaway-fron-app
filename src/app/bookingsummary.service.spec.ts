import { TestBed } from '@angular/core/testing';

import { BookingsummaryService } from './bookingsummary.service';

describe('BookingsummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingsummaryService = TestBed.get(BookingsummaryService);
    expect(service).toBeTruthy();
  });
});
