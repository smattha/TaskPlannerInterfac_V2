import { TestBed, inject } from '@angular/core/testing';

import { GetPartInworkingareaService } from './get-part-inworkingarea.service';

describe('GetPartInworkingareaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPartInworkingareaService]
    });
  });

  it('should be created', inject([GetPartInworkingareaService], (service: GetPartInworkingareaService) => {
    expect(service).toBeTruthy();
  }));
});
