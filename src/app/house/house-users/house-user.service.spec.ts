import { TestBed } from '@angular/core/testing';

import { HouseUserService } from './house-user.service';

describe('HouseUserService', () => {
  let service: HouseUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
