import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanicPage } from './panic.page';

describe('PanicPage', () => {
  let component: PanicPage;
  let fixture: ComponentFixture<PanicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
