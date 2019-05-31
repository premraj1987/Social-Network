import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedfrienddetailComponent } from './suggestedfrienddetail.component';

describe('SuggestedfrienddetailComponent', () => {
  let component: SuggestedfrienddetailComponent;
  let fixture: ComponentFixture<SuggestedfrienddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedfrienddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedfrienddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
