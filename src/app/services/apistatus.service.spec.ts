import { TestBed } from '@angular/core/testing';

import { ApistatusService } from './apistatus.service';

describe('ApistatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApistatusService = TestBed.get(ApistatusService);
    expect(service).toBeTruthy();
  });
});
