import { TestBed } from '@angular/core/testing';

import { IpMapService } from './ip-map.service';

describe('IpMapService', () => {
  let service: IpMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
