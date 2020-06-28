import { TestBed } from '@angular/core/testing';

import { FlightlistService } from './flightlist.service';

describe('FlightlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightlistService = TestBed.get(FlightlistService);
    expect(service).toBeTruthy();
  });
});
