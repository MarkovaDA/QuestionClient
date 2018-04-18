import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileBoxComponent } from './user-profile-box.component';

describe('UserProfileBoxComponent', () => {
  let component: UserProfileBoxComponent;
  let fixture: ComponentFixture<UserProfileBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
