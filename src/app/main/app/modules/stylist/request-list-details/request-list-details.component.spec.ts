import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListDetailsComponent } from './request-list-details.component';

describe('RequestListDetailsComponent', () => {
  let component: RequestListDetailsComponent;
  let fixture: ComponentFixture<RequestListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
