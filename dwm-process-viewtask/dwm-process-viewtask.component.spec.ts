import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmProcessViewtaskComponent } from './dwm-process-viewtask.component';

describe('DwmProcessViewtaskComponent', () => {
  let component: DwmProcessViewtaskComponent;
  let fixture: ComponentFixture<DwmProcessViewtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwmProcessViewtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmProcessViewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
