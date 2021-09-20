import { TestBed } from '@angular/core/testing';

import { IsbGuardGuard } from './isb-guard.guard';

describe('IsbGuardGuard', () => {
  let guard: IsbGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsbGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
