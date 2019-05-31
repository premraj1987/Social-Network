import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraHeaderComponent } from './ultra-header.component';

describe('UltraHeaderComponent', () => {
  let component: UltraHeaderComponent;
  let fixture: ComponentFixture<UltraHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltraHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltraHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
