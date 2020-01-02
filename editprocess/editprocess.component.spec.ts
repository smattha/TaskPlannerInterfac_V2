import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprocessComponent } from './editprocess.component';

describe('EditprocessComponent', () => {
  let component: EditprocessComponent;
  let fixture: ComponentFixture<EditprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
