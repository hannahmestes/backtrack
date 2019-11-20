import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { blacklistPage } from './blacklist.page';

describe('blacklistPage', () => {
  let component: blacklistPage;
  let fixture: ComponentFixture<blacklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [blacklistPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(blacklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
