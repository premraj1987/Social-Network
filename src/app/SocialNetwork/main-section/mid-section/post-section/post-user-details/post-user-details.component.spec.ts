import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUserDetailsComponent } from './post-user-details.component';

describe('PostUserDetailsComponent', () => {
  let component: PostUserDetailsComponent;
  let fixture: ComponentFixture<PostUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
