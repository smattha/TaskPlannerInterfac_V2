import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmProcessPageComponent } from './dwm-process-page.component';

describe('DwmProcessPageComponent', () => {
  let component: DwmProcessPageComponent;
  let fixture: ComponentFixture<DwmProcessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwmProcessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmProcessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
