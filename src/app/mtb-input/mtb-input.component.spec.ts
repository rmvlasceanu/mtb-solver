import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtbInputComponent } from './mtb-input.component';

describe('MtbInputComponent', () => {
  let component: MtbInputComponent;
  let fixture: ComponentFixture<MtbInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtbInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtbInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
