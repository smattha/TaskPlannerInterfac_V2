import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { FactorypageComponent } from './factorypage.component';

describe('FactorypageComponent', () => {
  let component: FactorypageComponent;
  let fixture: ComponentFixture<FactorypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
