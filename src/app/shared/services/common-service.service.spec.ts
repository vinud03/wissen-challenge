import { TestBed } from '@angular/core/testing';

import { CommonServiceService } from './common-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommonServiceService', () => {
  let service: CommonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CommonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
