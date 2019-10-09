import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTrackerPage } from './find-tracker.page';

describe('FindTrackerPage', () => {
  let component: FindTrackerPage;
  let fixture: ComponentFixture<FindTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTrackerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
