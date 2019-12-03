import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHelpPagePage } from './modal-help-page.page';

describe('ModalHelpPagePage', () => {
  let component: ModalHelpPagePage;
  let fixture: ComponentFixture<ModalHelpPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHelpPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHelpPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
