import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoperationComponent } from './editoperation.component';

describe('EditoperationComponent', () => {
  let component: EditoperationComponent;
  let fixture: ComponentFixture<EditoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
