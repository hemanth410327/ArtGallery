import { TestBed } from '@angular/core/testing';

import { ArtgalarydataService } from './artgalarydata.service';

describe('ArtgalarydataService', () => {
  let service: ArtgalarydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtgalarydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
