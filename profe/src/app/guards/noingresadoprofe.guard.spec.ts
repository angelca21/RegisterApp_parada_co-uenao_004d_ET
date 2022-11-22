import { TestBed } from '@angular/core/testing';

import { NoingresadoprofeGuard } from './noingresadoprofe.guard';

describe('NoingresadoprofeGuard', () => {
  let guard: NoingresadoprofeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoingresadoprofeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
