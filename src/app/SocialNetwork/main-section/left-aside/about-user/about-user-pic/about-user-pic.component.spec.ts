import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUserPicComponent } from './about-user-pic.component';

describe('AboutUserPicComponent', () => {
  let component: AboutUserPicComponent;
  let fixture: ComponentFixture<AboutUserPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUserPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUserPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
