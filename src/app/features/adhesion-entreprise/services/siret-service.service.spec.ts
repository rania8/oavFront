import { TestBed } from '@angular/core/testing';

import { SiretServiceService } from './entreprise-service.service';

describe('SiretServiceService', () => {
  let service: SiretServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiretServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
