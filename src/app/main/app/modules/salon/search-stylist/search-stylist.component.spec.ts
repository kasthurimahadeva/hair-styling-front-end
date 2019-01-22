import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStylistComponent } from './search-stylist.component';

describe('SearchStylistComponent', () => {
  let component: SearchStylistComponent;
  let fixture: ComponentFixture<SearchStylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
