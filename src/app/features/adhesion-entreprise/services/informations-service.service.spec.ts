import { TestBed } from '@angular/core/testing';

import { InformationsServiceService } from './informations-service.service';

describe('InformationsServiceService', () => {
  let service: InformationsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
