import { IonicModule } from '@ionic/angular';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPagePage } from './find-page.page';

describe('FindPagePage', () => {
  let component: FindPagePage;
  let fixture: ComponentFixture<FindPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPagePage ],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
  
    fixture = TestBed.createComponent(FindPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
