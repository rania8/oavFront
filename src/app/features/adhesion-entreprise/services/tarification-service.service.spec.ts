import { TestBed } from '@angular/core/testing';

import { TarificationServiceService } from './tarification-service.service';

describe('TarificationServiceService', () => {
  let service: TarificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
