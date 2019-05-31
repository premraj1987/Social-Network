import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPostLoginComponent } from './header-post-login.component';

describe('HeaderPostLoginComponent', () => {
  let component: HeaderPostLoginComponent;
  let fixture: ComponentFixture<HeaderPostLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPostLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPostLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
