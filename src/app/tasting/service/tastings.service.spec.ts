import { TestBed } from '@angular/core/testing';

import { TastingsService } from './tastings.service';

describe('TastingsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TastingsService = TestBed.get(TastingsService);
    expect(service).toBeTruthy();
  });
});
