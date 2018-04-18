import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewBoxComponent } from './data-view-box.component';

describe('DataViewBoxComponent', () => {
  let component: DataViewBoxComponent;
  let fixture: ComponentFixture<DataViewBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataViewBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataViewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
