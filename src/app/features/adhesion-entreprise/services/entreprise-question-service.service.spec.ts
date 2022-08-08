import { TestBed } from '@angular/core/testing';

import { EntrepriseQuestionServiceService } from './entreprise-question-service.service';

describe('EntrepriseQuestionServiceService', () => {
  let service: EntrepriseQuestionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrepriseQuestionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
