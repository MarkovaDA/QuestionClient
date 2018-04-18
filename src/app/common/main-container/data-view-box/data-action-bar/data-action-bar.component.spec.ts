import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataActionBarComponent } from './data-action-bar.component';

describe('DataActionBarComponent', () => {
  let component: DataActionBarComponent;
  let fixture: ComponentFixture<DataActionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataActionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
