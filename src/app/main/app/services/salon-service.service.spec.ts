import { TestBed } from '@angular/core/testing';

import { SalonServiceService } from './salon-service.service';

describe('SalonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalonServiceService = TestBed.get(SalonServiceService);
    expect(service).toBeTruthy();
  });
});
