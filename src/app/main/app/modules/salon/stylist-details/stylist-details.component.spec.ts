import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistDetailsComponent } from './stylist-details.component';

describe('StylistDetailsComponent', () => {
  let component: StylistDetailsComponent;
  let fixture: ComponentFixture<StylistDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylistDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
