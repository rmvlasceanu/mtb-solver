import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtbCellComponent } from './mtb-cell.component';

describe('MtbCellComponent', () => {
  let component: MtbCellComponent;
  let fixture: ComponentFixture<MtbCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtbCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtbCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
