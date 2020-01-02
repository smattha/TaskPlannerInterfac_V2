import { TestBed, inject } from '@angular/core/testing';

import { GetassdetailsService } from './getassdetails.service';

describe('GetassdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetassdetailsService]
    });
  });

  it('should be created', inject([GetassdetailsService], (service: GetassdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
