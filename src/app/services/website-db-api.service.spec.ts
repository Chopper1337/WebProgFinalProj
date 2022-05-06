import { TestBed } from '@angular/core/testing';

import { WebsiteDbApiService } from './website-db-api.service';

describe('WebsiteDbApiService', () => {
  let service: WebsiteDbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteDbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
