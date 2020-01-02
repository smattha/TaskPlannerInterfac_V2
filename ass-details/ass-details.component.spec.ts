import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssDetailsComponent } from './ass-details.component';

describe('AssDetailsComponent', () => {
  let component: AssDetailsComponent;
  let fixture: ComponentFixture<AssDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
