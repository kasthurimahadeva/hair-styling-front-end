import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonSignupComponent } from './salon-signup.component';

describe('SalonSignupComponent', () => {
  let component: SalonSignupComponent;
  let fixture: ComponentFixture<SalonSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
