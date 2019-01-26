import { TestBed } from '@angular/core/testing';

import { StylistService } from './stylist-service.service';

describe('StylistServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StylistService = TestBed.get(StylistService);
    expect(service).toBeTruthy();
  });
});
