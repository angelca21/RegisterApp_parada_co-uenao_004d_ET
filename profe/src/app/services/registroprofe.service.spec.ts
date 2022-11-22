import { TestBed } from '@angular/core/testing';

import { RegistroprofeService } from './registroprofe.service';

describe('RegistroprofeService', () => {
  let service: RegistroprofeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroprofeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
