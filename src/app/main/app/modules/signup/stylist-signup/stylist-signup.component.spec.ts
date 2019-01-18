import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistSignupComponent } from './stylist-signup.component';

describe('StylistSignupComponent', () => {
  let component: StylistSignupComponent;
  let fixture: ComponentFixture<StylistSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylistSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylistSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
