import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandconditonsPage } from './termsandconditons.page';

describe('TermsandconditonsPage', () => {
  let component: TermsandconditonsPage;
  let fixture: ComponentFixture<TermsandconditonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsandconditonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsandconditonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
