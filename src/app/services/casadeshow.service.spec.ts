import { TestBed } from '@angular/core/testing';

import { CasadeshowService } from './casadeshow.service';

describe('CasadeshowService', () => {
  let service: CasadeshowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasadeshowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
