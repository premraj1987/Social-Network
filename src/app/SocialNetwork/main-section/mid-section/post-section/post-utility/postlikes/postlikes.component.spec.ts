import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlikesComponent } from './postlikes.component';

describe('PostlikesComponent', () => {
  let component: PostlikesComponent;
  let fixture: ComponentFixture<PostlikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostlikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostlikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
