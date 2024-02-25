import { TestBed } from '@angular/core/testing';

import { CommonBusinessApiService } from './common-business-api.service';

describe('CommonBusinessApiService', () => {
  let service: CommonBusinessApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonBusinessApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
