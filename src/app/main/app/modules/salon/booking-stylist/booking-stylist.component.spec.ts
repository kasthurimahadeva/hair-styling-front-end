import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStylistComponent } from './booking-stylist.component';

describe('BookingStylistComponent', () => {
  let component: BookingStylistComponent;
  let fixture: ComponentFixture<BookingStylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingStylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
