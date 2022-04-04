import { TestBed } from '@angular/core/testing';

import { LeafMapService } from './leaf-map.service';

describe('LeafMapService', () => {
  let service: LeafMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeafMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
