import { TestBed } from '@angular/core/testing';

import { VtApiService } from './vt-api.service';

describe('VtApiService', () => {
  let service: VtApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VtApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
