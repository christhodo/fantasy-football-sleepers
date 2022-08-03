import { TestBed } from '@angular/core/testing';

import { SleepersService } from './sleepers.service';

describe('SleepersService', () => {
  let service: SleepersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SleepersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
