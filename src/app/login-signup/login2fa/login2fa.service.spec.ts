import { TestBed } from '@angular/core/testing';

import { Login2faService } from './login2fa.service';

xdescribe('Login2faService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Login2faService = TestBed.get(Login2faService);
    expect(service).toBeTruthy();
  });
});
