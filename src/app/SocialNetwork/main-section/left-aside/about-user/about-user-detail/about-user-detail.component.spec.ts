import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUserDetailComponent } from './about-user-detail.component';

describe('AboutUserDetailComponent', () => {
  let component: AboutUserDetailComponent;
  let fixture: ComponentFixture<AboutUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
