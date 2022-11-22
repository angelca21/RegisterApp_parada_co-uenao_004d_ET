import { TestBed } from '@angular/core/testing';

import { IngresadoprofeGuard } from './ingresadoprofe.guard';

describe('IngresadoprofeGuard', () => {
  let guard: IngresadoprofeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoprofeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
