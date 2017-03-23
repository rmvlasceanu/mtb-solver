import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtbStepComponent } from './mtb-step.component';

describe('MtbStepComponent', () => {
  let component: MtbStepComponent;
  let fixture: ComponentFixture<MtbStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtbStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtbStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
