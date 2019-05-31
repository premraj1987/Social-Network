import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUtilityComponent } from './post-utility.component';

describe('PostUtilityComponent', () => {
  let component: PostUtilityComponent;
  let fixture: ComponentFixture<PostUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
