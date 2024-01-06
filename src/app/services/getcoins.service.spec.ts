import { TestBed } from '@angular/core/testing';

import { GetcoinsService } from './getcoins.service';

describe('GetcoinsService', () => {
  let service: GetcoinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcoinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
