import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTotalLikesComponent } from './user-total-likes.component';

describe('UserTotalLikesComponent', () => {
  let component: UserTotalLikesComponent;
  let fixture: ComponentFixture<UserTotalLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTotalLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTotalLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
