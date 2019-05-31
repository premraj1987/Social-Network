import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddonsComponent } from './post-addons.component';

describe('PostAddonsComponent', () => {
  let component: PostAddonsComponent;
  let fixture: ComponentFixture<PostAddonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
