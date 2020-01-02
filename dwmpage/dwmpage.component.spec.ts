import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmpageComponent } from './dwmpage.component';

describe('DwmpageComponent', () => {
  let component: DwmpageComponent;
  let fixture: ComponentFixture<DwmpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwmpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
