import { TestBed } from '@angular/core/testing';

import { CommonFunctionsService } from './common-functions.service';

describe('CommonFunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonFunctionsService = TestBed.get(CommonFunctionsService);
    expect(service).toBeTruthy();
  });
});
