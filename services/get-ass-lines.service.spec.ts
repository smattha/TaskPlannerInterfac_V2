import { TestBed, inject } from '@angular/core/testing';

import { GetAssLinesService } from './get-ass-lines.service';

describe('GetAssLinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAssLinesService]
    });
  });

  it('should be created', inject([GetAssLinesService], (service: GetAssLinesService) => {
    expect(service).toBeTruthy();
  }));
});
